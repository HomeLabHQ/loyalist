import typing

import factory
from authentication.models import User
from core.tests import CRUDTestCase
from django.test import TestCase
from django.urls import reverse

from stores.models import Store
from stores.tests.factories import StoreFactory


class StoreViewSetTest(CRUDTestCase, TestCase):
    base_view = "stores:stores"
    queryset = Store.objects.all()
    item_count = 100
    methods: typing.ClassVar = ["list", "retrieve"]

    def setUp(self) -> None:
        self.user: User = self.create_and_login()
        self.fake_data = factory.build(dict, FACTORY_CLASS=StoreFactory)
        for _ in range(self.item_count):
            StoreFactory.create(author=self.user)

    def test_another_user_event(self) -> None:
        self.create_and_login(email="another@mail.com")
        resp = self.client.get(reverse(f"{self.base_view}-list"))
        self.assertEqual(resp.status_code, 200)
