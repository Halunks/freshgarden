"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLConf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt import views as jwt_views
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('backend/api/admin/', admin.site.urls),
    path('backend/api/auth/', include('apps.user.urls')),
    path('backend/api/auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('backend/api/auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('backend/api/auth/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
    path('backend/api/products/', include('apps.product.urls')),
    path('backend/api/products/user/', include('apps.user.urls')),
    path('backend/api/cart/', include('apps.cart.urls')),
    path('backend/api/', include('apps.product.urls')),
    # # path('backend/api/search/', include('apps.user.urls')),
    # # path('backend/api/category/', include('apps.user.urls')),
    # path('backend/api/reviews/', include('apps.review.urls')),
    # # path('backend/api/reviews/like/', include('apps.user.urls')),
    # # path('backend/api/reviews/likes/', include('apps.user.urls')),
    # # path('backend/api/reviews/comments/', include('apps.user.urls')),
    path('backend/api/users/', include('apps.user.urls')),
    # path('backend/api/home/', include('apps.user.urls')),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
