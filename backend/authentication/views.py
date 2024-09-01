from django.conf import settings
from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import AnonymousUser
from django.utils.http import urlsafe_base64_decode
from drf_spectacular.utils import OpenApiResponse, extend_schema, extend_schema_view
from rest_framework import mixins, permissions, status
from rest_framework.exceptions import force_str
from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet
from rest_framework_simplejwt.serializers import (
    TokenRefreshSerializer,
    TokenVerifySerializer,
)
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from rest_social_auth.serializers import OAuth2InputSerializer
from rest_social_auth.views import BaseSocialAuthView, SimpleJWTAuthMixin
from social_core.backends.google import GoogleOAuth2
from social_core.backends.linkedin import LinkedinOpenIdConnect

from authentication.models import User
from authentication.serializers import (
    ChangePasswordSerializer,
    CustomTokenObtainPairSerializer,
    JWTAuthResponseSerializer,
    JWTPairSerializer,
    SignUpConfirmSerializer,
    SignUpSerializer,
    SocialLinksSerializer,
    SocialLoginSerializer,
    UserSerializer,
)
from core.tasks import send_email


@extend_schema_view(post=extend_schema(responses=OpenApiResponse(JWTAuthResponseSerializer)))
class ObtainJSONWebToken(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


@extend_schema_view(post=extend_schema(responses=None))
class VerifyJSONWebToken(TokenVerifyView):
    serializer_class = TokenVerifySerializer


class RefreshJSONWebToken(TokenRefreshView):
    serializer_class = TokenRefreshSerializer


@extend_schema_view(post=extend_schema(responses=OpenApiResponse(JWTAuthResponseSerializer)))
class SignUpView(CreateAPIView):
    """Register new user in the system

    You need to provide `email`, `first_name`, `last_name`, `password`
    """

    permission_classes = (AllowAny,)
    serializer_class = SignUpSerializer


class ProfileViewSet(mixins.RetrieveModelMixin, mixins.UpdateModelMixin, GenericViewSet):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    pagination_class = None

    def get_object(self) -> AbstractBaseUser | AnonymousUser:
        return self.request.user


@extend_schema_view(post=extend_schema(responses=OpenApiResponse(JWTAuthResponseSerializer)))
class SignupConfirmView(GenericAPIView):
    """Activate user account"""

    serializer_class = SignUpConfirmSerializer
    permission_classes = (permissions.AllowAny,)

    def post(self, request, *args, **kwargs) -> Response:
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(raise_exception=True):  # pragma: no branch
            serializer.activate_user()
            email = force_str(urlsafe_base64_decode(serializer.validated_data["token"].split(".")[0]))
            user = User.objects.get(email=email)
            token = RefreshToken.for_user(user)
        return Response(data={"access": str(token.access_token), "refresh": str(token)}, status=200)


@extend_schema_view(
    get=extend_schema(responses=OpenApiResponse(SocialLinksSerializer)),
)
class SocialLoginsView(GenericAPIView):
    permission_classes = (AllowAny,)
    serializer_class = SocialLoginSerializer

    def get(self, request) -> Response:
        base_url = settings.SITE_URL
        if "localhost" not in settings.SITE_URL:
            base_url = settings.SITE_URL.replace("http://", "https://")
        li = LinkedinOpenIdConnect(redirect_uri=f"{base_url}/social/linkedin-openidconnect/")
        google = GoogleOAuth2(redirect_uri=f"{base_url}/social/google-oauth2/")
        data = {"linkedin_openidconnect": li.auth_url(), "google_oauth2": google.auth_url()}
        return Response(data)


@extend_schema_view(post=extend_schema(responses=OpenApiResponse(JWTPairSerializer)))
@extend_schema(request=OAuth2InputSerializer)
class SocialJWTPairUserAuthView(SimpleJWTAuthMixin, BaseSocialAuthView):
    serializer_class = JWTPairSerializer


@extend_schema_view(post=extend_schema(responses=None))
class UpdatePasswordView(APIView):
    """An endpoint for password updating"""

    serializer_class = ChangePasswordSerializer

    def post(self, request, *args, **kwargs) -> Response:
        serializer = self.serializer_class(instance=self.request.user, data=request.data)
        serializer.is_valid(raise_exception=True)
        template = "notifications/password_updated.html"
        send_email.delay(
            subject="Your password has been updated",
            template=template,
            recipients=[self.request.user.email],
            context={},
        )
        serializer.save()
        return Response(status=status.HTTP_204_NO_CONTENT)
