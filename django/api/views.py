from django.shortcuts import render
from django.http import HttpResponse

def Index(request):
    count_visits = request.session.get("count_visits", 0)
    request.session['count_visits'] = count_visits + 1

    return HttpResponse(f"You've reached the comethru API. You've visited it {str(count_visits)} times!")


from django.contrib.auth.models import Group
from django.contrib.auth.models import User as DjangoUser
from rest_framework import viewsets
from api.serializers import *
from api.models import *

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

class VenueViewSet(viewsets.ModelViewSet):
    queryset = Venue.objects.all()
    serializer_class = VenueSerializer