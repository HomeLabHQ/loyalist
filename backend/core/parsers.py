from django.conf import settings
from rest_framework.parsers import FileUploadParser

from core.utils import filename_generator


class ImageUploadParser(FileUploadParser):
    media_type = "image/*"

    def get_filename(self, stream, media_type, parser_context) -> str:
        ext = settings.IMAGE_DEFAULT_EXTENSION
        return f"{filename_generator()}.{ext}"


class CustomFileUploadParser(FileUploadParser):
    media_type = "*/*"

    def get_filename(self, stream, media_type, parser_context):
        try:
            ext = parser_context["kwargs"]["extension"]
            return f"{filename_generator()}.{ext.lower()}"
        except KeyError:
            pass
