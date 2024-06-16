import factory
import factory.fuzzy
from faker import Faker

from cards.models import LoyaltyCard

fake = Faker()


class LoyaltyCardFactory(factory.django.DjangoModelFactory):
    title = factory.fuzzy.FuzzyText(prefix="Loyalty card: ")
    description = factory.fuzzy.FuzzyText(prefix="Loyalty card description: ")
    code = fake.ean8()

    class Meta:
        model = LoyaltyCard
