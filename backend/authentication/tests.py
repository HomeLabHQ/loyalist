from unittest.mock import Mock, patch

from core.tests import BaseAPITest, BaseTestCase
from core.tokens import TokenGenerator
from django.urls import reverse
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from rest_framework_simplejwt.tokens import AccessToken, RefreshToken

from authentication.models import User


class APITestObtainJSONWebToken(BaseAPITest, BaseTestCase):
    def setUp(self):
        self.email = "test@mail.com"
        self.password = "test_password"
        self.user = self.create(email=self.email, password=self.password)

    def test_get_token_pair(self):
        resp = self.client.post(reverse("authentication:auth"), data={"email": self.email, "password": self.password})
        self.assertEqual(resp.status_code, 200)
        self.assertIn("refresh", resp.data)
        self.assertIn("access", resp.data)

    def test_get_token_authentication_error(self):
        resp = self.client.post(reverse("authentication:auth"), data={"email": "fake_data", "password": "fake_data"})
        self.assertEqual(resp.status_code, 401)


class APITestVerifyJSONWebToken(BaseAPITest, BaseTestCase):
    def setUp(self):
        self.email = "test@mail.com"
        self.password = "test_password"
        self.user = self.create(email=self.email, password=self.password)
        self.access_token = str(AccessToken.for_user(self.user))

    def test_token_is_valid(self):
        resp = self.client.post(reverse("authentication:auth-verify"), data={"token": self.access_token})
        self.assertEqual(resp.status_code, 200)

    def test_get_token_validation_error(self):
        resp = self.client.post(reverse("authentication:auth-verify"), data={"token": "fake_data"})
        self.assertEqual(resp.status_code, 401)


class APITestRefreshJSONWebToken(BaseAPITest):
    def setUp(self):
        self.email = "test@mail.com"
        self.password = "test_password"
        self.user = self.create(email=self.email, password=self.password)
        self.refresh_token = str(RefreshToken.for_user(self.user))

    def test_get_access_token(self):
        resp = self.client.post(reverse("authentication:auth-refresh"), data={"refresh": self.refresh_token})
        self.assertIn("access", resp.data)

    def test_get_token_refresh_error(self):
        resp = self.client.post(reverse("authentication:auth-refresh"), data={"refresh": "fake_data"})
        self.assertEqual(resp.status_code, 401)


class TestSignUpView(BaseAPITest):
    def setUp(self):
        self.data = {
            "email": "test@mail.com",
            "first_name": "something",
            "last_name": "something-else",
            "password": "testpass123",
            "password_repeated": "testpass123",
        }

    @patch("core.tasks.send_email.delay")
    def test_register_success(self, send):
        resp = self.client.post(reverse("authentication:auth-register"), data=self.data)
        self.assertEqual(resp.status_code, 201)
        self.assertEqual(User.objects.count(), 1)
        u = User.objects.last()
        self.assertFalse(u.is_active)
        send.assert_called_once()

    @patch("core.tasks.send_email.delay")
    def test_register_empty_names_success(self, send: Mock):
        data = self.data.copy()
        data["first_name"] = ""
        data["last_name"] = ""
        resp = self.client.post(reverse("authentication:auth-register"), data=data)
        self.assertEqual(resp.status_code, 400)
        self.assertEqual(User.objects.count(), 0)
        send.assert_not_called()

    @patch("core.tasks.send_email.delay")
    def test_register_invalid_data(self, send: Mock):
        data = self.data.copy()
        data["user_type"] = "something"
        data["email"] = "something"
        resp = self.client.post(reverse("authentication:auth-register"), data=data)
        self.assertEqual(resp.status_code, 400)
        send.assert_not_called()

    @patch("core.tasks.send_email.delay")
    def test_register_user_with_already_existed_email(self, send: Mock):
        self.create_and_login(email=self.data["email"], password=self.data["password"])
        resp = self.client.post(reverse("authentication:auth-register"), data=self.data)
        self.assertEqual(resp.status_code, 400)
        send.assert_not_called()

    def test_register_user_with_already_existed_email_but_different_case(self):
        self.create_and_login(email=self.data["email"], password=self.data["password"])
        data = self.data.copy()
        data["email"] = "Test@mail.com"
        resp = self.client.post(reverse("authentication:auth-register"), data=data)
        self.assertEqual(resp.status_code, 400)


class TestUserActivation(BaseAPITest):
    def setUp(self):
        self.user = self.create("test@email.com", "qwerty12345")
        self.user.is_active = False
        self.user.save()

    def test_user_activation(self):
        token = f"{urlsafe_base64_encode(force_bytes(self.user.email))}.{TokenGenerator.make_token(self.user)}"
        resp = self.client.post(reverse("authentication:auth-confirm"), data={"token": token})
        self.assertEqual(resp.status_code, 200)
        user = User.objects.get(pk=self.user.pk)
        self.assertTrue(user.is_active)

    def test_user_activation_returns_access_token(self):
        token = f"{urlsafe_base64_encode(force_bytes(self.user.email))}.{TokenGenerator.make_token(self.user)}"
        resp = self.client.post(reverse("authentication:auth-confirm"), data={"token": token})
        self.assertEqual(resp.status_code, 200)
        self.assertTrue("access" in resp.data)
        self.assertTrue("refresh" in resp.data)

    def test_user_activation_wrong_uid(self):
        token = f"rewrewviurehgfuyeryu.{TokenGenerator.make_token(self.user)}"
        resp = self.client.post(reverse("authentication:auth-confirm"), data={"token": token})
        self.assertEqual(resp.status_code, 400)

    def test_user_activation_wrong_token(self):
        token = f"{urlsafe_base64_encode(force_bytes(self.user.email))}.rewrewrewfewfewf"
        resp = self.client.post(reverse("authentication:auth-confirm"), data={"token": token})
        self.assertEqual(resp.status_code, 400)


class APITestProfileView(BaseAPITest):
    def setUp(self):
        self.user = self.create_and_login()

        self.mixed_data = {
            "first_name": "Jack",
            "last_name": "Daniels",
            "email": "dont@drink.me",
        }

    def test_retrieve_profile(self):
        resp = self.client.get(reverse("authentication:profile"))
        self.assertEqual(resp.status_code, 200)

    def test_update_profile(self):
        resp = self.client.put(reverse("authentication:profile"), data=self.mixed_data)
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.data["first_name"], self.mixed_data["first_name"])
        self.assertEqual(resp.data["last_name"], self.mixed_data["last_name"])
        self.assertEqual(resp.data["email"], self.mixed_data["email"])

    def test_update_profile_blank_first_and_last_name(self):
        data = {
            "first_name": "",
            "last_name": "",
            "email": "dont@drink.me",
        }
        resp = self.client.put(reverse("authentication:profile"), data=data)
        self.assertEqual(resp.status_code, 400)

    def test_update_profile_get_error_with_incomplete_data(self):
        del self.mixed_data["email"]
        resp = self.client.put(reverse("authentication:profile"), data=self.mixed_data)
        self.assertEqual(resp.status_code, 400)

    def test_update_profile_get_error_with_redundant_data(self):
        resp = self.client.put(reverse("authentication:profile"), data={"redundant_key": "test_data"})
        self.assertEqual(resp.status_code, 400)

    def test_partial_update_profile_with_redundant_data(self):
        resp = self.client.patch(reverse("authentication:profile"), data={"redundant_key": "test_data"})
        self.assertEqual(resp.status_code, 200)
        self.assertNotIn("redundant_key", resp.data)

    def test_partial_update_profile(self):
        del self.mixed_data["email"]
        resp = self.client.patch(reverse("authentication:profile"), data=self.mixed_data)
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.data["first_name"], self.mixed_data["first_name"])
        self.assertEqual(resp.data["last_name"], self.mixed_data["last_name"])
        self.assertEqual(resp.data, {**resp.data, **self.mixed_data})

    def test_update_profile_with_readonly_field(self):
        resp = self.client.patch(reverse("authentication:profile"), data={"is_active": "test"})
        self.assertEqual(resp.status_code, 200)
        self.assertIsInstance(self.user.is_active, bool)

    def test_retrieve_profile_when_logged_out(self):
        self.logout()
        resp = self.client.get(reverse("authentication:profile"))
        self.assertEqual(resp.status_code, 401)

    def test_update_profile_when_logged_out(self):
        self.logout()
        resp = self.client.put(reverse("authentication:profile"), data=self.mixed_data)
        self.assertEqual(resp.status_code, 401)


class APITestUpdatePassword(BaseAPITest):
    def setUp(self):
        self.mixed_data = {
            "old_password": "current_password",
            "new_password": "new_shiny_password",
            "confirmed_password": "new_shiny_password",
        }
        self.user = self.create_and_login(password=self.mixed_data["old_password"])

    @patch("core.tasks.send_email.delay")
    def test_update_password(self, task):
        resp = self.client.post(reverse("authentication:password-update"), data=self.mixed_data)
        self.assertEqual(resp.status_code, 204)
        user = User.objects.get(id=self.user.id)
        self.assertTrue(user.check_password(self.mixed_data["new_password"]))
        task.assert_called_once()

    def test_update_wrong_current_password(self):
        self.mixed_data["old_password"] += "_wrong"
        resp = self.client.post(reverse("authentication:password-update"), data=self.mixed_data)
        self.assertEqual(resp.status_code, 400)

    def test_update_wrong_confirmed_password(self):
        self.mixed_data["confirmed_password"] += "_wrong"
        resp = self.client.post(reverse("authentication:password-update"), data=self.mixed_data)
        self.assertEqual(resp.status_code, 400)

    def test_update_invalid_new_password(self):
        self.mixed_data["confirmed_password"] = self.mixed_data["new_password"] = "short"
        resp = self.client.post(reverse("authentication:password-update"), data=self.mixed_data)
        self.assertEqual(resp.status_code, 400)


# class APITestForgetPassword(BaseAPITest):
#     def setUp(self):
#         self.mixed_data = {"email": "test4@mail.com", "url": "/api/auth/"}
#         self.user = self.create_and_login(email=self.mixed_data["email"])

#     @patch("user_profile.tasks.send_email.delay")
#     def test_forget_password(self, send_email_task):
#         resp = self.client.post(reverse("user_profile:password-forget"), data=self.mixed_data)
#         self.assertEqual(resp.status_code, 204)
#         send_email_task.assert_called_once()

#     def test_forget_password_wrong_email(self):
#         self.mixed_data["email"] += "_wrong"
#         resp = self.client.post(reverse("user_profile:password-forget"), data=self.mixed_data)
#         self.assertEqual(resp.status_code, 400)


# class APITestResetPassword(BaseAPITest):
#     def setUp(self):
#         self.user = self.create_and_login()

#         self.mixed_data = {
#             "token": f"{urlsafe_base64_encode(force_bytes(self.user.email))}.{TokenGenerator.make_token(self.user)}",
#             "new_password": "new_shiny_password",
#             "confirmed_password": "new_shiny_password",
#         }

#     def test_reset_password(self):
#         resp = self.client.post(reverse("user_profile:password-reset"), data=self.mixed_data)
#         self.assertEqual(resp.status_code, 204)

#     def test_reset_password_invalid_token(self):
#         self.mixed_data["token"] += "_wrong"
#         resp = self.client.post(reverse("user_profile:password-reset"), data=self.mixed_data)
#         self.assertEqual(resp.status_code, 400)

#     def test_reset_password_wrong_new_password(self):
#         self.mixed_data["new_password"] += "_wrong"
#         resp = self.client.post(reverse("user_profile:password-reset"), data=self.mixed_data)
#         self.assertEqual(resp.status_code, 400)

#     def test_reset_password_wrong_confirmed_password(self):
#         self.mixed_data["confirmed_password"] += "_wrong"
#         resp = self.client.post(reverse("user_profile:password-reset"), data=self.mixed_data)
#         self.assertEqual(resp.status_code, 400)

#     def test_reset_password_wrong_email(self):
#         self.mixed_data["token"] = (
#             f"{urlsafe_base64_encode(force_bytes('1@2.ua'))}." f"{TokenGenerator.make_token(self.user)}"
#         )
#         resp = self.client.post(reverse("user_profile:password-reset"), data=self.mixed_data)
#         self.assertEqual(resp.status_code, 400)
