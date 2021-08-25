from django.db import models

# Create your models here.
class Titanic(models.Model):
    pclass = models.IntegerField()
    sex = models.IntegerField()
    age = models.IntegerField()
    sibsp = models.IntegerField()
    parch = models.IntegerField()
    fare = models.IntegerField()
    embarked = models.IntegerField()
    title = models.IntegerField()