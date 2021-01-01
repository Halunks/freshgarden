from django.urls import path

from apps.product.views import ProductListAPIView, ProductRetrieveUpdateDestroyAPIView, ProductListCreateAPIView


urlpatterns = [
    path('', ProductListCreateAPIView.as_view()),
    path('?search=<str:search_string>/', ProductListCreateAPIView.as_view()),
    path('new/', ProductListCreateAPIView.as_view()),
    path('user/<int:user_id>/', ProductListAPIView.as_view()),
    path('<int:product_id>/', ProductRetrieveUpdateDestroyAPIView.as_view()),
]
