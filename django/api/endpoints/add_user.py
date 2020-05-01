from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.core.exceptions import ObjectDoesNotExist

from api.models import User

class AddUser(APIView):
    def post(self, request, format=None):
        username = request.data["username"]
        password = request.data["password"]
        if not username or not password:
            return Response(response, status.HTTP_400_BAD_REQUEST)

        try:
            existing_user = User.objects.get(username=username)
            response = {
                'error': 'User already exists'
            } 
            return Response(response, status.HTTP_422_UNPROCESSABLE_ENTITY)
        except ObjectDoesNotExist:
            print('dne')
        return Response(data={}, status=status.HTTP_200_OK)