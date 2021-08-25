from django.shortcuts import render
from .models import Titanic
from .serializers import TitanicSerializer
from django.http import JsonResponse
from rest_framework import generics, status

from rest_framework.views import APIView
from rest_framework.parsers import FileUploadParser, MultiPartParser
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from . import ml_predict
import json


class TitanicList(generics.ListCreateAPIView):
    # permission_classes = [IsAuthenticated]
    queryset = Titanic.objects.all()
    serializer_class = TitanicSerializer

    
class TitanicDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Titanic.objects.all()
    serializer_class = TitanicSerializer


def titanic_details(request, pk):
    titanic = Titanic.objects.get(pk=pk)
    pclass = titanic.pclass
    sex = titanic.sex
    age = titanic.age
    sibsp = titanic.sibsp
    parch = titanic.parch
    fare = titanic.fare
    embarked = titanic.embarked
    title = titanic.title
    prediction = ml_predict.prediction_model(pclass,sex,age,sibsp,parch,fare,embarked,title)
    list_prediction = prediction.tolist()
    json_prediction = json.dumps(list_prediction)
    data = {
        'result': titanic.pclass + titanic.sex + titanic.age,
        'prediction': json_prediction
    }
    print("MachinLearning result: ", prediction)
    return JsonResponse(data)
    



# Create your views here.
