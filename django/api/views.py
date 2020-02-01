from django.shortcuts import render
from django.http import HttpResponse

def Default(request):
    return HttpResponse("Hello, world! You've reached the comethru API.")


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
    
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

class VenueList(APIView):
    def get(self, request, format=None):
        venues = Venue.objects.all()
        serializer = VenueSerializer(venues, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = VenueSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VenueDetail(APIView):
    def get_object(self, pk):
        try:
            return Venue.objects.get(pk=pk)
        except Venue.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        venue = self.get_object(pk)
        serializer = VenueSerializer(venue)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        venue = self.get_object(pk)
        serializer = VenueSerializer(venue, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        venue = self.get_object(pk)
        venue.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

