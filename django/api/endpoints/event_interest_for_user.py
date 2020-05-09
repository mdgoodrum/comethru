from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.core.exceptions import ObjectDoesNotExist

from api.models import User, EventInterest
import api.error_codes as error_codes

from ..serializers import EventInterestSerializer
# Get all the events that a given user marked as interested or going

# @spader Duplicated code
def user_exists_by_username(username):
    try:
        existing_user = User.objects.get(username=username)
        return True
    except ObjectDoesNotExist:
        return False

class EventInterestForUser(APIView):
    def post(self, request, format=None):
        user = request.data['user'] if 'user' in request.data else None
        if not user:
            return Response({}, status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(pk=user)
            interests = EventInterest.objects.filter(user=user)
            response = EventInterestSerializer(interests, many=True, context={'request': request}).data
            print(user, interests)
            return Response(response, status.HTTP_200_OK)
        except Exception as e:
            print(e)
            return Response({}, status.HTTP_422_UNPROCESSABLE_ENTITY)

        # If we reach this block, we threw somewhere we didn't expect
        return Response({}, status.HTTP_500_INTERNAL_SERVER_ERROR)