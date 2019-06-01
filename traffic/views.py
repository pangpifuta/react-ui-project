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
import os
import threading
import json

FinishedOptimize = False
StorageOptimize = ()
FinishedInitialize = False
StorageInitialize = ()


class RegView(viewsets.ModelViewSet):       # add this
    serializer_class = RegSerializer          # add this
    queryset = reg.objects.all()              # add this


def optimize(request):
    region = (request.GET['region'])
    duration = int(request.GET['duration'])
    generation = int(request.GET['generation'])
    individuals = int(request.GET['individuals'])
    timeSteps = int(request.GET['timestep'])
    popga2 = None
    # if upload file {
    #     popga2 = read file
    # }
    # popga2 = [[10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10], [
    #     10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]]
    print(region, duration, generation, individuals)
    # popga2 = [[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    #            11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]
    params = {"region": region,
              "numGeneration2": generation,
              "intervalSize": duration,
              "timeSteps": timeSteps,
              "numIndividuals2": individuals,
              "populationGA2": popga2}
    print("Optimizing")
    threading.Thread(target=process, args=(params, )).start()
    print("Started threading!")
    return http.HttpResponse("Success")


def process(params):
    global FinishedOptimize, StorageOptimize
    res = optimization2(params)
    FinishedOptimize = True
    StorageOptimize = res


def checkoptimize(request):
    global FinishedOptimize, StorageOptimize
    if not FinishedOptimize:
        return http.HttpResponse(status=204)
    else:
        print("Returning ", len(StorageOptimize),
              StorageOptimize[0], StorageOptimize[1])
        FinishedOptimize = False
        return http.HttpResponse(json.dumps(StorageOptimize), content_type="application/json")


def initialize(request):
    region = request.GET['region']
    duration = int(request.GET['duration'])
    generation = int(request.GET['generation'])
    individuals = int(request.GET['individuals'])
    timeSteps = int(request.GET['timestep'])
    print(region, duration, generation, individuals)
    params = {"region": region,
              "numGeneration1": generation,
              "timeSteps": timeSteps,
              "intervalSize": duration,
              "numIndividuals1": individuals}
    print("Initializing")
    threading.Thread(target=processInitialize, args=(params, )).start()
    return http.HttpResponse("Success")


def processInitialize(params):
    global FinishedInitialize, StorageInitialize
    res = optimization1(params)
    FinishedInitialize = True
    temp = ()
    improvement = []
    improvement.append(res[0])
    coords = []
    coords.append(res[1])
    temp += (improvement, coords,)
    StorageInitialize = temp


def checkinitialize(request):
    global FinishedInitialize, StorageInitialize
    if not FinishedInitialize:
        return http.HttpResponse(status=204)
    else:
        print("Returning ", len(StorageInitialize), StorageInitialize[0])
        FinishedInitialize = False
        return http.HttpResponse(json.dumps(StorageInitialize), content_type="application/json")


def requestfile(request):
    path = 'temp.pickle'
    if os.stat(path).st_size == 0:
        return http.HttpResponse("File not exists")
    with open(path, 'rb') as f:
        response = http.HttpResponse(
            f, content_type="application/python-pickle")
        response['Content-Disposition'] = 'attachment; filename="result.pickle"'
        return response


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
    print("Run Opt2 for", params["timeSteps"])
    temp = ()
    improvement = []
    coords = []
    for i in range(params["timeSteps"]):
        # print("views.py print")
        res = controller.run(i)
        print("iteration", i+1, "of", params["timeSteps"], "Result", len(res))
        improvement.append(res[0])
        coords.append(res[2])
    temp += (improvement, coords,)
    return temp
