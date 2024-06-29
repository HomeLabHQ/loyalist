import requests
from django.core.files.temp import NamedTemporaryFile

from authentication.models import User
from authentication.views import GoogleOAuth2, LinkedinOpenIdConnect

USER_FIELDS = ["email", "first_name", "last_name"]


def extract_avatar(url: str, user: User) -> None:
    """
    Download avatar from url and save it to user.avatar
    """
    response = requests.get(url, timeout=5)
    img_temp = NamedTemporaryFile(delete=True)
    img_temp.write(response.content)
    img_temp.flush()
    user.avatar.save(f"{user.pk}.png", img_temp, save=True)


def create_user(strategy, details, backend, user=None, *args, **kwargs):
    if user:
        return {"is_new": False}
    fields = {name: kwargs.get(name, details.get(name)) for name in backend.setting("USER_FIELDS", USER_FIELDS)}
    if not fields:
        return None
    social_user = strategy.create_user(**fields)
    if isinstance(backend, GoogleOAuth2) and kwargs.get("response").get("picture"):
        extract_avatar(kwargs.get("response").get("picture"), social_user)
    if isinstance(backend, LinkedinOpenIdConnect) and kwargs.get("response").get("picture"):
        extract_avatar(kwargs.get("response").get("picture"), social_user)
    social_user.is_active = True
    social_user.save(update_fields=["is_active", "avatar"])
    return {"is_new": True, "user": social_user}
