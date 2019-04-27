from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets          # add this
from .serializers import RegSerializer      # add this
from .models import reg                     # add this
from django import http
from .genetic_algorithm.Optimization2 import Controller, optimization2
from .genetic_algorithm.Optimization1 import optimization1


class RegView(viewsets.ModelViewSet):       # add this
    serializer_class = RegSerializer          # add this
    queryset = reg.objects.all()              # add this


def optimize(request):
    region = (request.GET['region'])
    duration = int(request.GET['duration'])
    generation = int(request.GET['generation'])
    individuals = int(request.GET['individuals'])
    print(region, duration, generation, individuals)
    # popga2 = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    #            11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]
    params = {"region": region,
              "numGeneration2": generation,
              "intervalSize": duration,
              "timeSteps": 1,
              "numIndividuals2": individuals,
              "populationGA2": [[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]]}
    print("Optimization:", optimization2(params))

    return http.HttpResponse(None, content_type="application/json")


def initialize(request):
    region = request.GET['region']
    duration = int(request.GET['duration'])
    generation = int(request.GET['generation'])
    individuals = int(request.GET['individuals'])
    print(region, duration, generation, individuals)
    params = {"region": region,
              "numGeneration1": generation,
              "timeSteps": 2,
              "intervalSize": duration,
              "numIndividuals1": individuals}
    # print("Optimization1:", optimization1(params))
    return http.HttpResponse(optimization1(params), content_type="application/json")


def stat(request):
    return http.HttpResponse(None, content_type="application/json")
