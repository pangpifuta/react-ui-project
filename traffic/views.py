from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets          # add this
from .serializers import RegSerializer      # add this
from .models import reg                     # add this
from django import http
from .genetic_algorithm.Optimization2 import Controller
from .genetic_algorithm.Optimization1 import optimization1
from deap import tools
import math
from .genetic_algorithm.simulator import Simulator


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
    print("Optimization:")

    return http.HttpResponse(optimization2(params))


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
    res = http.HttpResponse()
    res['Good'] = 20
    return res


def optimization2(params):
    NUM_INDIVIDUALS = params["numIndividuals2"]
    preDefinedParams = {"crossover": {"operator": tools.cxTwoPoint},
                        "mutate": {"operator": tools.mutShuffleIndexes, "indpb": 0.1},
                        "select": {"operator": tools.selRoulette, "k": int(math.sqrt(NUM_INDIVIDUALS//2))},
                        "crossroads": 21,
                        "densities": None,
                        "simulator": Simulator(10, 2, 3),
                        "fitnessGA2": "1",
                        "minLim": 0,
                        "maxLim": 119}

    controller = Controller({**params, **preDefinedParams})
    # for i in range(params["timeSteps"]):
    # print("views.py print")
    controller.run(0)
