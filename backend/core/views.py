from django.core.files.storage import default_storage
from django.core.files.uploadedfile import UploadedFile
from drf_spectacular.utils import extend_schema
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from core.parsers import ImageUploadParser
from core.serializers import ImageUploadSerializer
from core.utils import preprocess_image


class ImageUploadView(APIView):
    """Upload image to server

    Upload image into S3 bucket, returning its `name` and `url`.
    You need to specify `Content-Type` header to `image/*` value, i. e. `image/jpeg`.

    """

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
