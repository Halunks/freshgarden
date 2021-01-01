from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, ListAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from apps.product.models import Product
from apps.product.serializers import ProductSerializer, ProductMinimalSerializer

User = get_user_model()


class ProductListCreateAPIView(ListCreateAPIView):
    """
    GET:
    Returns all the products if no search parameters is given
    If a search parameter is given, it will return all products that contain it in their text_content or user information

    POST:
    Creates a new product instance and returns it
    """
    permission_classes = [AllowAny]
    queryset = Product.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return ProductSerializer
        return ProductMinimalSerializer

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        search_string = self.request.query_params.get('search')

        if search_string:
            appendix_fulltext = "¬"
            appendix_location = "¬"
            if len(search_string.split(" ")) > 1:
                appendix_location = search_string.split(" ")[1]
            if len(search_string.split(" ")) > 2:
                appendix_fulltext = search_string.split(" ")[2]
            if len(search_string.split(" ")) > 0:
                appendix_location = search_string.split(" ")[0]
            if len(search_string.split(" ")) > 1:
                appendix_fulltext = search_string.split(" ")[1]
            # TODO make this searches with AND operators for having the right intersection
            # TODO resolve issue with author__first_name not functioning
            queryset = queryset.filter(
                Q(name__icontains=search_string)
                | Q(name__icontains=appendix_fulltext)
                | Q(location__icontains=search_string)
                | Q(location__icontains=appendix_location)
                | Q(category__icontains=search_string)
                | Q(author__first_name__icontains=search_string)
                | Q(author__last_name__icontains=search_string)
            )
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)


class ProductRetrieveUpdateDestroyAPIView(RetrieveUpdateDestroyAPIView):
    """
    GET:
    Returns a product based on the given id

    PUT:
    Updates and returns a product based on the given id

    PATCH:
    Partially updates and returns a product based on the given id

    DELETE:
    Deletes a product based on the given id and return no content status 204
    """

    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    lookup_url_kwarg = 'product_id'
    # TODO adjust permission for UPDATE and DELETE to IsOwner, for GET default IsAuthenticated is sufficient
    # permission_classes = [IsOwner]


class ProductListAPIView(ListAPIView):
    """
    GET:
    Returns all product of given users id
    """
    permission_classes = [AllowAny]

    def get_queryset(self):
        # TODO is there a more efficient, cleaner way?
        requested_user = User.objects.get(id=self.kwargs["user_id"])
        return Product.objects.filter(author=requested_user)

    serializer_class = ProductSerializer
    lookup_url_kwarg = 'user_id'
