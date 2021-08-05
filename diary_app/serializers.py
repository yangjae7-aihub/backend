from rest_framework import serializers
from .models import ImageUpload, TextUpload

class ImageUploadSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ImageUpload
        fields = "__all__"
        

class TextUploadSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = TextUpload
        fields = "__all__"