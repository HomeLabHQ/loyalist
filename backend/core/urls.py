from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from core.views import FileCleanUpView, FileUploadView, ImageUploadView

api_urlpatterns = [
    path("auth/", include("authentication.urls")),
    path("", include("stores.urls")),
    path("", include("cards.urls")),
    path("image-upload/", ImageUploadView.as_view(), name="image-upload"),
    path("file-upload/<str:extension>/", FileUploadView.as_view(), name="file-upload"),
    path("file-cleanup/", FileCleanUpView.as_view(), name="file-cleanup"),
]
urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(api_urlpatterns)),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/swagger-ui/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
]
if settings.ENVIRONMENT == "development":  # pragma: no cover
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
