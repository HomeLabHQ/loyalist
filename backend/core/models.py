from django.db import models
from django_stubs_ext.db.models import TypedModelMeta


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta(TypedModelMeta):
        abstract = True


class DescriptionModel(models.Model):
    description = models.TextField(blank=True)

    class Meta(TypedModelMeta):
        abstract = True


class TitleModel(models.Model):
    """Title

    Model with extra ``title`` field that is required

    """

    title = models.CharField(max_length=255)

    class Meta(TypedModelMeta):
        abstract = True


class TitleDescriptionModel(TitleModel, DescriptionModel):
    """TitleDescriptionModel

    This models contains:

    ``title`` and optional ``description`` field to use in your models

    """

    class Meta(TypedModelMeta):
        abstract = True
