from drf_spectacular.utils import OpenApiResponse, extend_schema
from rest_framework import serializers
from rest_framework.decorators import action
from rest_framework.generics import GenericAPIView
from rest_framework.relations import PKOnlyObject
from rest_framework.response import Response


class ListSerializerMixin(GenericAPIView):
    list_serializer_class = None
    serializer_class = None
    list_queryset = None
    queryset = None
    action: str

    def get_serializer_class(self):
        assert self.list_serializer_class, "Use must set 'list_serializer_class' in order to use ListSerializerMixin"
        if self.action == "list":
            return self.list_serializer_class
        return super().get_serializer_class()

    def get_queryset(self):
        if self.action == "list" and self.list_queryset is not None:
            return self.list_queryset
        return super().get_queryset()


class ChoiceSerializer(serializers.Serializer):
    field = serializers.CharField()
    values = serializers.ListField(child=serializers.CharField())


class ChoiceMixin:
    all_choices = dict

    @extend_schema(
        summary="Get choices for object",
        description="Get ENUM choices for object",
        responses={200: OpenApiResponse(response=serializers.ListSerializer(child=ChoiceSerializer()))},
    )
    @action(detail=False, methods=["GET"], pagination_class=None)
    def choices(self, request, *args, **kwargs):
        """Use this mixin if you have some choices that need to be send to frontend
        this action will import dynamic all choices user send.
        """
        data = [{"field": v[0], "values": [item.name for item in v[1]]} for v in self.all_choices.items()]
        return Response(data=data, status=200)


class RepresentationPKField(serializers.PrimaryKeyRelatedField):
    """RepresentationPKField
    Use this field to reference object by PK in (update/create)
    but represent them with specific serializer.
    """

    def __init__(self, representation=None, **kwargs) -> None:
        self.representation = representation
        super().__init__(**kwargs)

    def use_pk_only_optimization(self) -> bool:
        return False

    def to_representation(self, value):
        if self.pk_field is not None:
            return self.pk_field.to_representation(value)
        if isinstance(value, PKOnlyObject):
            return self.representation(self.get_queryset().get(pk=value.pk)).data
        return self.representation(value).data


class IdSerializer(serializers.Serializer):
    id = serializers.IntegerField()
