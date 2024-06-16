from core.mixins import ListSerializerMixin
from rest_framework import mixins, viewsets
from rest_framework.permissions import IsAuthenticated

from stores.models import Store
from stores.serializers import BaseStoreSerializer, StoreSerializer


class StoreViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    ListSerializerMixin,
    viewsets.GenericViewSet,
):
    permission_classes = (IsAuthenticated,)
    list_serializer_class = BaseStoreSerializer
    serializer_class = StoreSerializer
    list_queryset = Store.objects.all().only(*BaseStoreSerializer.Meta.fields)
    queryset = Store.objects.all().only(*StoreSerializer.Meta.fields)
