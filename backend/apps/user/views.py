from django.core.exceptions import ObjectDoesNotExist
from django.core.mail import send_mail
from django.db.models import Q
from rest_framework.generics import ListAPIView, RetrieveAPIView, GenericAPIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.db import IntegrityError

from apps.user.models import User
from apps.user.serializers import UserSerializer
from apps.registration_profile.models import RegistrationProfile
from apps.registration_profile.models import code_generator


class UserRegistration(GenericAPIView):
    """
    POST:
    Sends a verification code to the given email address and creates an anonymous user
    """
    # TODO Alternative: use the serializer instead of overwriting the "post" method

    permission_classes = []
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        email_address = request.data["email"]
        username = email_address.split("@")
        code = code_generator()

        try:
            new_user = User(email=email_address, username=username[0], is_active=False)
            new_user.save()
            registration_profile = RegistrationProfile(user=new_user, code=code)
            registration_profile.save()
        except IntegrityError:
            return Response(f"The email address '{email_address}' is already taken.")

        send_mail(
            'Fresh Garden Registration Code',
            f"Here is your registration code {registration_profile.code}",
            'fresh.garden.ch@gmail.com',
            [new_user.email],
            fail_silently=False,
        )
        serializer = self.get_serializer(new_user)
        return Response(serializer.data)


class ValidateUpdateRegistration(GenericAPIView):
    """
    POST:
    If given a matching validation code with the provided email, update the user profile
    """
    permission_classes = []
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        email = self.request.data["email"]
        code = self.request.data["code"]
        try:
            registration = RegistrationProfile.objects.get(user__email=email, code=code, code_used=False)
            registration.user.username = self.request.data["username"]
            registration.user.first_name = self.request.data["first_name"]
            registration.user.last_name = self.request.data["last_name"]
            registration.user.set_password(self.request.data["password"])
            registration.user.is_active = True
            registration.code_used = True
            registration.user.save()
            registration.save()
            return Response(self.get_serializer(registration.user).data)
        except ObjectDoesNotExist:
            return Response(data=f"The provided email {email} and code {code} do not match.", status=400)
        except IntegrityError:
            return Response(data="This username is already taken.", status=400)


class GetLoggedUser(ListAPIView):
    """
    GET:
    Returns the logged in user
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        user = self.request.user
        serializer = self.get_serializer(user)
        return Response(serializer.data)


class UserListSearch(ListAPIView):
    """
    GET:
    Returns all the users if no search parameters is given
    If a search parameter is given, it will return all users that contain it in their user information
    """
    permission_classes = [AllowAny]

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search_string = self.request.query_params.get('search')
        if search_string:
            queryset = queryset.filter(
                Q(location__icontains=search_string)
                | Q(username__icontains=search_string)
                | Q(first_name__icontains=search_string)
                | Q(last_name__icontains=search_string)
            )
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class GetSpecificUser(RetrieveAPIView):
    """
    GET : Get specific user profile
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_url_kwarg = 'user_id'
