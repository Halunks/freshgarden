from django.urls import path

from apps.user.views import UserListSearch, GetSpecificUser, GetLoggedUser, UserRegistration,\
        ValidateUpdateRegistration

urlpatterns = [
    path('', UserListSearch.as_view()),
    path('me/', GetLoggedUser.as_view()),
    path('list/', UserListSearch.as_view()),
    path('registration/', UserRegistration.as_view()),
    path('registration/validate/', ValidateUpdateRegistration.as_view()),
    path('?search=<str:search_string>/', UserListSearch.as_view()),
    path('<int:user_id>/', GetSpecificUser.as_view()),
]
