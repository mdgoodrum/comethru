from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.core.exceptions import ObjectDoesNotExist

from ..serializers import EventSerializer
from ..models import Event

# Get 
class Events(APIView):
    def post(self, request, format=None):
        serializer = EventSerializer(Event.objects.all(), many=True)
        return Response(serializer.data, status.HTTP_200_OK)