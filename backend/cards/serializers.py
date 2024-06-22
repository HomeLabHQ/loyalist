from rest_framework import serializers

from cards.models import LoyaltyCard


class BaseLoyaltyCardSerializer(serializers.ModelSerializer[LoyaltyCard]):
    class Meta:
        model = LoyaltyCard
        fields = (
            "id",
            "title",
        )


class LoyaltyCardSerializer(serializers.ModelSerializer[LoyaltyCard]):
    class Meta(BaseLoyaltyCardSerializer.Meta):
        fields = (*BaseLoyaltyCardSerializer.Meta.fields, "description", "code", "balance", "format")
