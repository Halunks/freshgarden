import sys

from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    # def get_reviews(self, user):
    # return user.reviews.count()

    class Meta:
        model = User
        exclude = ('password',)
