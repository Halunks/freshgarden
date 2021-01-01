from django.contrib.auth import get_user_model
from django.db import models


User = get_user_model()


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/name/<filename>
    return f'{instance.name}/{filename}'


class Product(models.Model):
    author = models.ForeignKey(
        to=User,
        related_name='fk_product_to_user',
        on_delete=models.CASCADE,
        null=True,
    )
    name = models.CharField(
        max_length=40,
    )

    class Category(models.TextChoices):
        Fruit = ('fruit', 'fruit')
        Vegetable = ('vegetable', 'vegetable')
        Other = ('other', 'other')

    category = models.CharField(
        max_length=10,
        choices=Category.choices,
        default=Category.Fruit,
    )

    def is_upperclass(self):
        return self.category in {
            self.category.fruit,
            self.category.vegetable,
            self.category.other,
        }

    location = models.CharField(
        max_length=80,
        blank=True,
        default=""
    )

    stock = models.IntegerField(
        null=True,
    )
    price = models.FloatField(
    )

    class Unit(models.TextChoices):
        kg = ('kg', 'kg')
        piece = ('piece', 'piece')

    units = models.CharField(
        max_length=10,
        choices=Unit.choices,
        default=Unit.kg,
    )

    def is_upperclass(self):
        return self.units in {
            self.units.kg,
            self.units.piece,
        }

    promotion = models.FloatField(
        null=True,
        blank=True
    )
    image = models.ImageField(
        upload_to=user_directory_path,
        null=True,
    )
    deliver_within_radius = models.IntegerField(
        null=True,
        blank=True
    )
    description = models.CharField(
        max_length=300,
        blank=True
    )
    expiration_date = models.DateField(
        null=True,
        blank=True
    )

    def __str__(self):
        return f"{self.author.first_name}: {self.name[0:100]}"

