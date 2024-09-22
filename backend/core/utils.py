import logging
import uuid
from io import BytesIO

from django.conf import settings
from django.core.exceptions import ObjectDoesNotExist
from django.db.models import QuerySet
from django.utils import timezone
from PIL import Image
from PIL.ImageFile import ImageFile
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

logger = logging.getLogger("django")


# region common utils
def create_url(relative_url: str, token: str) -> str:
    """Generate full URL based on relative url and token
    :param relative_url: relative url
    :param token: token
    :return: url
    """
    return f"{relative_url.strip('/')}?token={token}"


def filename_generator() -> str:
    return f"{uuid.uuid4().hex}_{round(timezone.now().timestamp() * 1000)}"


# endregion


# region Files/Images


def resize_image(image) -> ImageFile:
    """Resize image to max width and return it"""
    try:
        im = Image.open(image)
        im.thumbnail((settings.IMAGE_MAX_SIZE, settings.IMAGE_MAX_SIZE), Image.Resampling.LANCZOS)
    except OSError as e:
        raise ValidationError(f"Wrong image format. {e}")

    return im


def bytes_from_image(image, img_format="jpeg"):
    """Converts pillow image file to bytes"""
    image = image.convert("RGB")
    with BytesIO() as output:
        image.save(output, format=img_format)
        contents = output.getvalue()
    return contents  # noqa: RET504


def bytes_to_mb(b: float) -> float:
    """Convert bytes to megabytes

    :param b: float number in bytes
    :return: float number in megabytes
    """
    return b / 1024 / 1024


def preprocess_image(file):
    """Preload image by Pillow, validate for image size limit
    and resize before uploading on S3.

    :param file: image file in jpeg format; class TemporaryUploadedFile
    :return: return status code 400 if the image size exceeds the
    maximum image size limit determined in settings; and return resized image otherwise
    """
    im_size = file.size
    if im_size > settings.IMAGE_MAX_SIZE:
        raise ValidationError(
            f"File is too large. Image size should not exceed {bytes_to_mb(settings.IMAGE_SIZE_LIMIT)} MB.",
        )
    im = resize_image(file)
    return bytes_from_image(im, settings.IMAGE_DEFAULT_EXTENSION)


# endregion


# region Nested writes
def save_related(
    base: dict,
    queryset: QuerySet,
    validated_data: dict,
    related_serializer_class: type[serializers.Serializer],
    context: dict | None = None,
):
    """Save related serializer based on base serializer data

    :param base: base info to pass in related serializer's ``.save(**base)`` method
    :param queryset: queryset to get object from
    :param validated_data: validated data
    :param related_serializer_class: related serializer class
    :param context: parent serializer's context

    :return list of created objects
    """
    response = []
    for v in validated_data:
        id_ = v.pop("id", None)
        if id_:
            try:
                obj = queryset.get(id=id_)
            except ObjectDoesNotExist:
                logger.warning(f"Object (asset) with ID {id_} is not found in db. Skipping.")
                continue
        else:
            obj = None
        related_serializer = related_serializer_class(data=v, instance=obj, context=context)
        related_serializer.is_valid(raise_exception=True)
        obj = related_serializer.save(**base)
        response.append(obj)
    return response


def get_deletion_ids(queryset: QuerySet, validated_data: list, lookup_field: str = "id") -> list:
    """Get IDs for queryset that must be deleted from queryset.
    i. e. IDs that are not present in validated_data but present in queryset

    :param queryset: queryset object
    :param validated_data: validated data to find IDs in
    :param lookup_field: what field to use when retrieving deletion ID
    :return: list of IDs for deletion
    """
    model_set = set(queryset.values_list(lookup_field, flat=True))
    values_set = {v[lookup_field] for v in validated_data if lookup_field in v}
    return list(model_set.difference(values_set))


# endregion
