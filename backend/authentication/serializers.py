from core.serializers import ImageUploadSerializer, ModelFileSerializer
from core.tasks import send_email
from core.tokens import TokenGenerator
from core.utils import create_url
from django.conf import settings
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.db import transaction
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from rest_framework import serializers
from rest_framework.exceptions import force_str
from rest_framework.test import force_bytes
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_social_auth.serializers import JWTBaseSerializer

from authentication.models import User


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        attrs["email"] = attrs["email"].lower()
        return super().validate(attrs)


class JWTAuthResponseSerializer(serializers.Serializer):
    access = serializers.CharField()
    refresh = serializers.CharField()


class SignUpSerializer(serializers.ModelSerializer):
    """Create new user when sign up"""

    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = (
            "id",
            "email",
            "first_name",
            "last_name",
            "password",
        )
        write_only_fields = ("password",)

    def validate_email(self, value):
        value = value.lower()
        if User.objects.filter(email=value).exists():
            error = f"User with the email '{value}' already exists"
            raise serializers.ValidationError(error)
        return value

    @transaction.atomic
    def create(self, validated_data):
        first_name = validated_data.pop("first_name", "")
        last_name = validated_data.pop("last_name", "")
        user = User.objects.create(
            email=validated_data["email"],
            first_name=first_name,
            last_name=last_name,
            is_active=False,
        )
        user.set_password(validated_data["password"])
        user.save()
        token = f"{urlsafe_base64_encode(force_bytes(user.email))}.{TokenGenerator.make_token(user)}"
        template = "notifications/signup.email.html"
        url = create_url(f"{settings.SITE_URL}/signup/confirm", token)
        send_email.delay(
            subject="Welcome",
            template=template,
            recipients=[user.email],
            context={
                "url": url,
                "email": user.email,
            },
        )
        return user

    def to_representation(self, instance):
        data = {}
        refresh = TokenObtainPairSerializer.get_token(instance)
        data["refresh"] = str(refresh)
        data["access"] = str(refresh.access_token)
        return data


class BaseUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            "email",
            "first_name",
            "last_name",
        )


class UserSerializer(ModelFileSerializer):
    avatar = ImageUploadSerializer(required=False, allow_null=True)

    class Meta(BaseUserSerializer.Meta):
        fields = (*BaseUserSerializer.Meta.fields, "avatar", "is_notifications_enabled", "has_password")

    def validate_avatar(self, avatar) -> str:
        if avatar:
            return avatar["name"]
        return avatar


class SignUpConfirmSerializer(serializers.Serializer):
    token = serializers.CharField()

    def validate(self, data):
        token = data["token"]
        error = f"Provided activation token '{token}' is not valid"
        try:
            uid, token = token.split(".")
            uid = force_str(urlsafe_base64_decode(uid))
        except (TypeError, ValueError):
            raise serializers.ValidationError(error)
        try:
            user = User.objects.get(email=uid)
        except User.DoesNotExist:
            raise serializers.ValidationError(error)

        if not TokenGenerator.check_token(user, token):
            raise serializers.ValidationError(error)
        data["email"] = uid
        return data

    def activate_user(self):
        user = User.objects.get(email=self.validated_data["email"])
        user.is_active = True
        user.save(update_fields=["is_active"])


class SocialLinksSerializer(serializers.Serializer):
    linkedin_openidconnect = serializers.URLField(required=False)
    google_oauth2 = serializers.URLField(required=False)


class SocialLoginSerializer(serializers.Serializer):
    provider = serializers.CharField()
    code = serializers.CharField()


class JWTPairSerializer(JWTBaseSerializer):
    access = serializers.SerializerMethodField()
    refresh = serializers.SerializerMethodField()

    jwt_token_class_name = "rest_framework_simplejwt.tokens.RefreshToken"

    def get_access(self, obj) -> str:
        return str(self.get_token_instance().access_token)

    def get_refresh(self, obj) -> str:
        return str(self.get_token_instance())


class PasswordSerializer(serializers.Serializer):
    new_password = serializers.CharField(required=True)
    confirmed_password = serializers.CharField(required=True)

    def validate_new_password(self, value):
        validate_password(value)
        return value

    def validate(self, data):
        new_password = data["new_password"]
        confirmed_password = data["confirmed_password"]
        if new_password != confirmed_password:
            raise serializers.ValidationError("The two password fields didn't match.")
        return data


class ChangePasswordSerializer(PasswordSerializer):
    """Serializer for password change endpoint."""

    old_password = serializers.CharField(required=True)

    def validate_old_password(self, value):
        # * For users with social auth
        if not self.instance.has_usable_password():
            return value
        if not self.instance.check_password(value):
            raise ValidationError("Wrong current password.")
        return value

    def update(self, instance: User, validated_data):
        self.instance.set_password(validated_data.get("new_password"))
        self.instance.save()
        return self.instance
