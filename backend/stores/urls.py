from rest_framework.routers import SimpleRouter

from stores.views import StoreViewSet

app_name = "stores"
router = SimpleRouter()
router.register("stores", StoreViewSet, basename="stores")

urlpatterns = [*router.urls]
