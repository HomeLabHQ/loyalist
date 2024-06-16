import typing

import factory
from authentication.models import User
from core.tests import CRUDTestCase
from django.test import TestCase
from django.urls import reverse

from cards.models import LoyaltyCard
from cards.tests.factories import LoyaltyCardFactory


class StoreViewSetTest(CRUDTestCase, TestCase):
    base_view = "cards:loyalty-cards"
    queryset = LoyaltyCard.objects.all()
    item_count = 100
    methods: typing.ClassVar = ["list", "retrieve", "create", "update", "partial_update", "destroy"]
    public_methods: typing.ClassVar = []

    def setUp(self) -> None:
        self.user: User = self.create_and_login()
        self.fake_data = factory.build(dict, FACTORY_CLASS=LoyaltyCardFactory)
        for _ in range(self.item_count):
            LoyaltyCardFactory.create(author=self.user)

    def test_public_list(self) -> None:
        self.create_and_login(email="another@mail.com")
        resp = self.client.get(reverse(f"{self.base_view}-list"))
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.data["count"], 0)

    def test_public_list_with_cards(self) -> None:
        public_count = 5
        ids = [item.pk for item in self.queryset[:public_count]]
        self.queryset.filter(pk__in=ids).update(is_public=True)
        self.create_and_login(email="another@mail.com")
        resp = self.client.get(reverse(f"{self.base_view}-list"))
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(resp.data["count"], public_count)
