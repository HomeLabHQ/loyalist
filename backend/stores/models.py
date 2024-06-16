from typing import TYPE_CHECKING

from authentication.models import User
from core.models import TitleDescriptionModel
from django.db import models
from django_stubs_ext.db.models import TypedModelMeta

if TYPE_CHECKING:
    from cards.models import LoyaltyCard
    from django.db.models import Manager


class Store(TitleDescriptionModel):
    is_verified = models.BooleanField(default=False)
    website = models.URLField(blank=True)
    logo = models.ImageField(upload_to="stores", null=True, blank=True, max_length=255)
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="stores")
    if TYPE_CHECKING:
        loyalty_cards: Manager[LoyaltyCard]

    class Meta(TypedModelMeta):
        ordering = ["-pk"]
        indexes = [
            models.Index(fields=["is_verified"]),
            models.Index(fields=["website"]),
            models.Index(fields=["author"]),
        ]
        db_table = "stores"
        verbose_name = "Store"
        verbose_name_plural = "Stores"
