from django.db import models

# Create your models here.
class ImageUpload(models.Model):
    img = models.ImageField(null=True)
    
    
class TextUpload(models.Model):
    txt = models.CharField(max_length=200)