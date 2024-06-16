USER_FIELDS = ["email", "first_name", "last_name"]


def create_user(strategy, details, backend, user=None, *args, **kwargs):
    if user:
        return {"is_new": False}
    fields = {name: kwargs.get(name, details.get(name)) for name in backend.setting("USER_FIELDS", USER_FIELDS)}
    if not fields:
        return None
    social_user = strategy.create_user(**fields)
    social_user.is_active = True
    social_user.save(update_fields=["is_active"])
    return {"is_new": True, "user": social_user}
