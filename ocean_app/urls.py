from django.contrib import admin
from django.urls import path
from .views import TitanicList, TitanicDetail, titanic_details
from .models import Titanic
from .serializers import TitanicSerializer


urlpatterns = [
    path('list/', TitanicList.as_view(queryset=Titanic.objects.all(), serializer_class=TitanicSerializer)),
    path('detail/<int:pk>', TitanicDetail.as_view(queryset=Titanic.objects.all(), serializer_class=TitanicSerializer)),
    path('prediction/<int:pk>', titanic_details),
]
