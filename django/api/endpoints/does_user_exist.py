from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.core.exceptions import ObjectDoesNotExist

from api.models import User
import api.error_codes as error_codes

class DoesUserExist(APIView):
    def post(self, request, format=None):
        email = request.data['email'] if 'email' in request.data else None
        username = request.data['username'] if 'username' in request.data else None
        if not (username or email):
            return Response({}, status.HTTP_400_BAD_REQUEST)

        exists = User.objects.filter(username=username).exists() if username else False
        exists |= User.objects.filter(email=email).exists() if email else exists
        
        return Response(data={
            'message': exists
        }, status=status.HTTP_200_OK)

        # If we reach this block, we threw somewhere we didn't expect
        return Response({}, status.HTTP_500_INTERNAL_SERVER_ERROR)