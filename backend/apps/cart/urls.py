from django.urls import path
from .views import CartAddItem, CartRemoveItem, CartIncrementQuantity, CartDecrementQuantity, ClearCartView, \
    CartDetailsView, CheckOutCartView

app_name = 'cart'
urlpatterns = [
    path('add/<int:id>/', CartAddItem.as_view(), name='cart_add'),
    path('item_clear/<int:id>/', CartRemoveItem.as_view(), name='item_clear'),
    path('item_increment/<int:id>/', CartIncrementQuantity.as_view(), name='item_increment'),
    path('item_decrement/<int:id>/', CartDecrementQuantity.as_view(), name='item_decrement'),
    path('cart_clear/', ClearCartView.as_view(), name='cart_clear'),
    path('cart-detail/', CartDetailsView.as_view(), name='cart_detail'),
    path('cart-checkout/', CheckOutCartView.as_view(), name='cart_checkout'),
]
