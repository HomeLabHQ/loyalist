from rest_framework.routers import SimpleRouter

from cards.views import LoyaltyCardViewSet

app_name = "cards"
router = SimpleRouter()
router.register("loyalty-cards", LoyaltyCardViewSet, basename="loyalty-cards")

urlpatterns = [*router.urls]
