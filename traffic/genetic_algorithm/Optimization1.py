from long import GA1
from short1 import GA2
from simulator import Simulator
import time
from deap import tools
import math
import copy
import os.path
import pickle
import numpy as np

class Controller:
    def __init__(self, params):
        self.params = params
        self.params["simulator"].setTimeInterval(self.params["intervalSize"])
        self.timeSteps = params["timeSteps"]
        self.paramsListGA1 = ["crossover", "mutate", "select", "populationGA1", "numGeneration1", "crossroads", "timeSteps", "numIndividuals1", "fitnessGA1", "simulator", "minLim", "maxLim"]
        self.paramsGA1 = dict((k, params[k]) for k in self.paramsListGA1 if k in params)
        self.positions = {}

    def addTimeStep(self, bestIndividuals):
        ga1 = GA1(self.paramsGA1)
        prevTimeSteps = (len(bestIndividuals[0])//self.paramsGA1["crossroads"])
        if (prevTimeSteps)<=self.timeSteps//2:
            newTimeSteps = prevTimeSteps*2
            self.paramsGA1["timeSteps"] = newTimeSteps
            for individual in bestIndividuals:
                individual+=individual
        else:
            newTimeSteps = self.timeSteps
            self.paramsGA1["timeSteps"] = newTimeSteps
            for individual in bestIndividuals:
                individual+=individual[len(individual)-(self.paramsGA1["crossroads"]*(newTimeSteps - prevTimeSteps)):len(individual)]
        ga1 = GA1(self.paramsGA1)
        newPopulation = ga1.makePopulation(bestIndividuals)
        del ga1
        positions = self.paramsGA1["simulator"].getPositions(newPopulation[0], False)
        self.positions[0] = positions
        print(self.positions[0])
        return newPopulation

    def run1(self):
        timeStep = 1
        newPopulation = []
        while timeStep<=self.timeSteps:
            self.paramsGA1["simulator"].clear()
            self.paramsGA1["timeSteps"] = timeStep
            ga1 = GA1(self.paramsGA1)
            bestIndividuals = ga1.run()
            newPopulation = self.addTimeStep(bestIndividuals)
            self.paramsGA1["populationGA1"] = newPopulation
            if timeStep<=self.timeSteps//2:
                timeStep*=2
            elif timeStep < self.timeSteps and timeStep > self.timeSteps//2:
                timeStep=self.timeSteps
            elif timeStep==self.timeSteps:
                break
        self.params["simulator"].exit()
        return newPopulation

##Sample params
##params = {"numGeneration1": 10,
##          "timeSteps": 10,
##          "intervalSize": 120,
##          "numIndividuals1": 50,}
def optimization1(params):
    NUM_INDIVIDUALS = params["numIndividuals1"]
    preDefinedParams = {"crossover": {"operator": tools.cxTwoPoint},
                        "mutate": {"operator": tools.mutShuffleIndexes,"indpb": 0.1},
                        "select": {"operator": tools.selRoulette, "k": int(math.sqrt(NUM_INDIVIDUALS//2))},
                        "populationGA1": None,
                        "crossroads": 21,
                        "simulator": Simulator(10, 2, 3),
                        "fitnessGA1": "1",
                        "minLim": 0,
                        "maxLim": 119}
                        
    controller = Controller({**params, **preDefinedParams})
    return controller.run1()

params = {"numGeneration1": 10,
          "timeSteps": 10,
          "intervalSize": 120,
          "numIndividuals1": 50,}

optimization1(params)
