from .long import GA1
from .short1 import GA2
from .simulator import Simulator
import time
from deap import tools
import math
import copy
import os.path
import pickle
import numpy as np
import random


class Controller:
    def __init__(self, params):
        self.params = params

        self.params["simulator"].setTimeInterval(self.params["intervalSize"])
        self.timeSteps = params["timeSteps"]
        self.paramsListGA2 = ["crossover", "mutate", "select", "populationGA2", "numGeneration2",
                              "crossroads", "numIndividuals2", "fitnessGA2", "simulator", "densities", "minLim", "maxLim"]
        self.paramsGA2 = dict((k, params[k])
                              for k in self.paramsListGA2 if k in params)
        self.positions = {}
        self.params["simulator"].clear()
        # change simulation state

    def run1(self):
        newPopulation = self.params["populationGA2"]
        if newPopulation is not None:
            bestIndividual = newPopulation[0][0:self.params["crossroads"]]

        fitness = 0
        for timeStep in range(self.params["timeSteps"]):
            if newPopulation is not None:
                population = []
                for individual in newPopulation:
                    population.append(
                        individual[timeStep*self.params["crossroads"]:(timeStep+1)*self.params["crossroads"]])
            else:
                population = None
            print("Timtestep: " + str(timeStep))
            self.paramsGA2["population"] = population
            ga2 = GA2(self.paramsGA2)
            best, bestIndividual = ga2.run()
            fitness += best
            self.positions[timeStep] = self.params["simulator"].getPositions(
                bestIndividual[0], True)
            self.params["simulator"].setState(bestIndividual)
            print(self.positions)
        print(fitness)
        self.params["simulator"].exit()
        return fitness

    def run(self, timeStep):
        newPopulation = self.params["populationGA2"]
        if newPopulation is None:
            population = None
        elif any(isinstance(i, list) for i in newPopulation):
            population = []
            for individual in newPopulation:
                population.append(
                    individual[timeStep*self.params["crossroads"]:(timeStep+1)*self.params["crossroads"]])
        else:
            population = []
            population.append(
                newPopulation[timeStep*self.params["crossroads"]:(timeStep+1)*self.params["crossroads"]])

        self.paramsGA2["population"] = population
        ga2 = GA2(self.paramsGA2)
        fitness, improvement, bestIndividual = ga2.run()
        positions = self.params["simulator"].getPositions(bestIndividual)
        self.params["simulator"].setState(bestIndividual)
        return improvement, bestIndividual[0], positions


# should look something like this on front end
# Sample params
# params = {"numGeneration1": 10,
# "timeSteps": 10,
# "intervalSize": 120,
# "numIndividuals2": 50,
# "populationGA2": obtained from optimzation1}

# file = open("PopulationGA2.pickle", "rb")
# populationGA2 = pickle.load(file)
# params = {"numGeneration2": 1,
#           "timeSteps": 2,
#           "intervalSize": 120,
#           "numIndividuals2": 50,
#           "populationGA2": populationGA2}
# NUM_INDIVIDUALS = params["numIndividuals2"]
# preDefinedParams = {"crossover": {"operator": tools.cxTwoPoint},
#                     "mutate": {"operator": tools.mutShuffleIndexes, "indpb": 0.1},
#                     "select": {"operator": tools.selRoulette, "k": int(math.sqrt(NUM_INDIVIDUALS//2))},
#                     "crossroads": 21,
#                     "densities": None,
#                     "simulator": Simulator(10, 2, 3),
#                     "fitnessGA2": "1",
#                     "minLim": 0,
#                     "maxLim": 119}

# controller = Controller({**params, **preDefinedParams})
# for i in range(params["timeSteps"]):
#     a, b, c = controller.run(i)
#     temp = {}
#     for j in range(50):
#         k = random.choice(list(c.keys()))
#         temp[k] = c[k]
#     print(temp)
