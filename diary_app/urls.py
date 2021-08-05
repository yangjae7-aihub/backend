from django.contrib import admin
from django.urls import path
from .views import ImageUploadList, ImageUploadDetail, TextUploadList, TextUploadDetail
from .models import ImageUpload, TextUpload
from .serializers import ImageUploadSerializer, TextUploadSerializer


urlpatterns = [
    path('image/list/', ImageUploadList.as_view(queryset=ImageUpload.objects.all(), serializer_class=ImageUploadSerializer)),
    path('image/<int:pk>', ImageUploadDetail.as_view(queryset=ImageUpload.objects.all(), serializer_class=ImageUploadSerializer)),
    path('text/list/', TextUploadList.as_view(queryset=TextUpload.objects.all(), serializer_class=TextUploadSerializer)),
    path('text/<int:pk>', TextUploadDetail.as_view(queryset=TextUpload.objects.all(), serializer_class=TextUploadSerializer)),
]
