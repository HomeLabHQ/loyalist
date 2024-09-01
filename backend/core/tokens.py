import six
from django.contrib.auth.tokens import PasswordResetTokenGenerator

from authentication.models import User


class _TokenGenFactory(PasswordResetTokenGenerator):
    def _make_hash_value(self, user: User, timestamp) -> str:
        return six.text_type(user.email) + six.text_type(timestamp) + six.text_type(user.is_active)


TokenGenerator = _TokenGenFactory()
