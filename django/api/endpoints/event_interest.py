from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.core.exceptions import ObjectDoesNotExist

from api.models import User, EventInterest
import api.error_codes as error_codes

from api.serializers import EventInterestSerializer
# Get all the events that a given user marked as interested or going

# @spader Duplicated code
def user_exists_by_username(username):
    try:
        existing_user = User.objects.get(username=username)
        return True
    except ObjectDoesNotExist:
        return False

class GetEventInterest(APIView):
    # @spader I use POST because I want to send the request data as data (not URL), and I'm not accessing a model directly.
    # But really this acts like a GET, so I'm not sure what to do.
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

    def put(self, request, format=None):
        user = request.data['user'] if 'user' in request.data else None
        event = request.data['event'] if 'event' in request.data else None
        new_status = request.data['status'] if 'status' in request.data else None
        if not (user and event and new_status):
            return Response({}, status.HTTP_400_BAD_REQUEST)

        try:
            interest = EventInterest.objects.get(user=user, event=event)
            interest.status = new_status
            interest.save()
            return Response({}, status.HTTP_200_OK)
        except Exception as e:
            return Response({}, status.HTTP_422_UNPROCESSABLE_ENTITY)

        # If we reach this block, we threw somewhere we didn't expect
        return Response({}, status.HTTP_500_INTERNAL_SERVER_ERROR)
