from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from core.views import ImageUploadView

api_urlpatterns = [
    path("auth/", include("authentication.urls")),
    path("", include("stores.urls")),
    path("", include("cards.urls")),
    path("image-upload/", ImageUploadView.as_view(), name="image-upload"),
]
urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include(api_urlpatterns)),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/swagger-ui/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
]
if settings.ENVIRONMENT == "development":
    urlpatterns = urlpatterns + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
