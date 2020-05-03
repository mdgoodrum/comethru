from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.core.exceptions import ObjectDoesNotExist

from api.models import User
import api.error_codes as error_codes

def find_user_by_username(username):
    try:
        existing_user = User.objects.get(username=username)
        return True
    except ObjectDoesNotExist:
        return False

def find_user_by_email(email):
    try:
        existing_user = User.objects.get(email=email)
        return True
    except ObjectDoesNotExist:
        return False

class DoesUserExist(APIView):
    def post(self, request, format=None):
        email = request.data['email'] if 'email' in request.data else None
        username = request.data['username'] if 'username' in request.data else None
        if not (username or email):
            return Response({}, status.HTTP_400_BAD_REQUEST)

        exists = find_user_by_username(username) if username else False
        exists = (exists or find_user_by_email(email)) if email else exists
        
        return Response(data={
            'message': exists
        }, status=status.HTTP_200_OK)

        # If we reach this block, we threw somewhere we didn't expect
        return Response({}, status.HTTP_500_INTERNAL_SERVER_ERROR)