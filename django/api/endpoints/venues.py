from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.core.exceptions import ObjectDoesNotExist

from api.serializers import VenueSerializer
from api.models import Venue

# Get all venues from a list of IDs
class Venues(APIView):
    def post(self, request, format=None):
        ids = request.data['ids']

        venues = Venue.objects.filter(id__in=ids)
        serializer = VenueSerializer(venues, many=True)
        return Response(serializer.data, status.HTTP_200_OK)