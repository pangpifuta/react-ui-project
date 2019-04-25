from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets          # add this
from .serializers import RegSerializer      # add this
from .models import reg                     # add this
from django import http
from .genetic_algorithm.Optimization2 import Controller, optimization2


class RegView(viewsets.ModelViewSet):       # add this
    serializer_class = RegSerializer          # add this
    queryset = reg.objects.all()              # add this


def region = request.GET['region']


timestep = int(request.GET['timestep'])
duration = int(request.GET['duration'])
generation = int(request.GET['generation'])
individuals = int(request.GET['individuals'])
print(region, timestep, duration, generation, individuals)
popga2 = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
           11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]
print("Optimization:", optimization2(
    {"numIndividuals2": individuals, "timeSteps": 2, "populationGA2": None, "numGeneration2": 1}))
return http.HttpResponse()


def initialize(request):
    region = request.GET['region']
    duration = request.GET['duration']
    generation = request.GET['generation']
    individuals = request.GET['individuals']
    print(region, duration, generation, individuals)
    return http.HttpResponse()


def stat(request):
    return http.HttpResponse()
