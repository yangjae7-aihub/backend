from django.shortcuts import render

from .models import ImageUpload, TextUpload
from .serializers import ImageUploadSerializer, TextUploadSerializer
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import generics

# Create your views here.
class ImageUploadList(generics.ListCreateAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = ImageUpload.objects.all()
    serializer_class = ImageUploadSerializer

    
class ImageUploadDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ImageUpload.objects.all()
    serializer_class = ImageUploadSerializer


class TextUploadList(generics.ListCreateAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = TextUpload.objects.all()
    serializer_class = TextUploadSerializer

    
class TextUploadDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = TextUpload.objects.all()
    serializer_class = TextUploadSerializer