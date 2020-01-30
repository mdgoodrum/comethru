from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return HttpResponse("Hello, world! You've reached the comethru API.")


from django.contrib.auth.models import Group
from django.contrib.auth.models import User as DjangoUser
from rest_framework import viewsets
from .serializers import *
from .models import *


class DjangoUserViewSet(viewsets.ModelViewSet):
    queryset = DjangoUser.objects.all().order_by('-date_joined')
    serializer_class = DjangoUserSerializer

class DjangoGroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = DjangoGroupSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
