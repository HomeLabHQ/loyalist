from django.contrib import admin

from .models import Store


@admin.register(Store)
class StoreAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "description",
        "title",
        "is_verified",
        "website",
        "logo",
        "author",
    )
    list_filter = ("is_verified", "author")
