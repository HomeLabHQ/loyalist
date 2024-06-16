from rest_framework import serializers

from stores.models import Store


class BaseStoreSerializer(serializers.ModelSerializer[Store]):
    class Meta:
        model = Store
        fields = (
            "id",
            "title",
            "logo",
        )


class StoreSerializer(serializers.ModelSerializer[Store]):
    class Meta(BaseStoreSerializer.Meta):
        fields = (*BaseStoreSerializer.Meta.fields, "description")
