from rest_framework import serializers

from apps.product.serializers import ProductSerializer
from apps.user.serializers import UserSerializer
from apps.cart.models import Cart


class CartSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    products = ProductSerializer(read_only=True)

    class Meta:
        model = Cart
        fields = ['user', 'products', 'created']
