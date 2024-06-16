# Create your models here.


from authentication.models import User
from core.models import TitleDescriptionModel
from django.db import models
from django_stubs_ext.db.models import TypedModelMeta
from stores.models import Store

from cards.constants import CodeFormat


class LoyaltyCard(TitleDescriptionModel):
    code = models.CharField(max_length=255)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="loyalty_cards")
    is_public = models.BooleanField(default=False)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    format = models.CharField(
        max_length=255,
        choices=[(v.name, v.value) for v in CodeFormat],
        default=CodeFormat.CODE_128.name,
    )
    store = models.ForeignKey(Store, on_delete=models.SET_NULL, null=True, related_name="loyalty_cards")

    class Meta(TypedModelMeta):
        ordering = ["-pk"]
        indexes = [
            models.Index(fields=["is_public"]),
            models.Index(fields=["store"]),
            models.Index(fields=["author"]),
        ]
        db_table = "loyalty_cards"
        verbose_name = "Loyalty card"
        verbose_name_plural = "Loyalty cards"
