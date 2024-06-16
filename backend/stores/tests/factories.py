import factory
import factory.fuzzy

from stores.models import Store


class StoreFactory(factory.django.DjangoModelFactory):
    title = factory.fuzzy.FuzzyText(prefix="Store: ")
    description = factory.fuzzy.FuzzyText(prefix="Description: ")

    class Meta:
        model = Store
