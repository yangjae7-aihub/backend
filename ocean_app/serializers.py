from rest_framework import serializers
from .models import Titanic


class TitanicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Titanic
        fields = "__all__"