from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets          # add this
from .serializers import RegSerializer      # add this
from .models import reg                     # add this

class RegView(viewsets.ModelViewSet):       # add this
    serializer_class = RegSerializer          # add this
    queryset = reg.objects.all()              # add this