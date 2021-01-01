import random

from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

User = get_user_model()


def code_generator(length=5):
    numbers = '0123456789'
    return ''.join(random.choice(numbers) for _ in range(length))


class RegistrationProfile(models.Model):
    code = models.CharField(
        default=code_generator,
        max_length=5
    )
    user = models.OneToOneField(
        to=User,
        related_name='reg_profile',
        on_delete=models.CASCADE,
        primary_key=True
    )
    code_used = models.BooleanField(
        default=False
    )

    def __str__(self):
        return f'ID {self.pk}: Registration profile for {self.user.username}'

    @receiver(post_save, sender=User)
    def create_registration_profile(sender, instance, **kwargs):
        profile, created = RegistrationProfile.objects.get_or_create(user=instance)
        if created:
            profile.save()
