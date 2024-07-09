from django.core.files.storage import default_storage
from django.core.files.uploadedfile import UploadedFile
from drf_spectacular.utils import extend_schema
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from core.parsers import CustomFileUploadParser, ImageUploadParser
from core.serializers import ImageUploadSerializer
from core.utils import preprocess_image


class ImageUploadView(APIView):
    """Upload image to server

    Upload image into S3 bucket, returning its `name` and `url`.
    You need to specify `Content-Type` header to `image/*` value, i. e. `image/jpeg`.

    """

    permission_classes = (IsAuthenticated,)
    parser_classes = (ImageUploadParser,)
    serializer_class = ImageUploadSerializer

    @extend_schema(request={"content": {"format": "binary"}})
    def post(self, request) -> Response:
        file: UploadedFile = request.data["file"]
        with default_storage.open(file.name, "wb") as f:
            f.write(preprocess_image(file))
        url = default_storage.url(file.name)
        serializer = self.serializer_class({"name": file.name, "url": url})
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)


class FileUploadView(APIView):
    """Upload File to server"""

    permission_classes = (IsAuthenticated,)
    parser_classes = (CustomFileUploadParser,)
    serializer_class = ImageUploadSerializer

    @extend_schema(
        request={
            "content": {"format": "binary"},
        },
    )
    def post(self, request, extension: str) -> Response:
        _file: UploadedFile = request.data["file"]
        with default_storage.open(_file.name, "wb") as f:
            f.write(_file.read())
        url = default_storage.url(_file.name)
        serializer = self.serializer_class({"name": _file.name, "url": url})
        return Response(data=serializer.data, status=status.HTTP_201_CREATED)


class FileCleanUpView(APIView):
    permission_classes = (IsAuthenticated,)

    @extend_schema(
        request=ImageUploadSerializer,
        responses={status.HTTP_204_NO_CONTENT: None},
    )
    def post(self, request) -> Response:
        filename = request.data.get("name")
        if filename:
            default_storage.delete(filename)
        return Response(status=status.HTTP_204_NO_CONTENT)
