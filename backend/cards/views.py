from core.mixins import ListSerializerMixin
from django.db.models import Q
from rest_framework import mixins, viewsets
from rest_framework.permissions import IsAuthenticated

from cards.models import LoyaltyCard
from cards.serializers import BaseLoyaltyCardSerializer, LoyaltyCardSerializer


class LoyaltyCardViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.CreateModelMixin,
    mixins.UpdateModelMixin,
    mixins.DestroyModelMixin,
    ListSerializerMixin,
    viewsets.GenericViewSet,
):
    permission_classes = (IsAuthenticated,)
    list_serializer_class = BaseLoyaltyCardSerializer
    serializer_class = LoyaltyCardSerializer

    def get_queryset(self):
        if self.action == "list":
            return LoyaltyCard.objects.filter(Q(is_public=True) | Q(author=self.request.user)).only(
                *BaseLoyaltyCardSerializer.Meta.fields,
            )
        return LoyaltyCard.objects.filter(Q(is_public=True) | Q(author=self.request.user)).only(
            *LoyaltyCardSerializer.Meta.fields,
        )
