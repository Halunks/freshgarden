from rest_framework import serializers

from apps.registration_profile.models import RegistrationProfile


class RegistrationProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegistrationProfile
        fields = '__all__'
