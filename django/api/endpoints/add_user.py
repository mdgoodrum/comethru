from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.core.exceptions import ObjectDoesNotExist

from api.models import User
import api.error_codes as error_codes

class AddUser(APIView):
    def post(self, request, format=None):
        username = request.data["username"]
        password = request.data["password"]
        email = request.data["email"]
        if not (username and password and email):
            return Response({}, status.HTTP_400_BAD_REQUEST)

        try:
            # If we can find a user with this username, you can't add
            existing_user = User.objects.get(username=username)
            return Response({
                'error_code': error_codes.USER_ALREADY_EXISTS,
                'error_message': 'User already exists'
            } , status.HTTP_422_UNPROCESSABLE_ENTITY)
        except ObjectDoesNotExist:
            # If we can't find one, this username is good to go!
            user = User.objects.create_user(username=username, email=email, password=password)
            return Response(data={}, status=status.HTTP_200_OK)

        # If we reach this block, we threw somewhere we didn't expect
        return Response({}, status.HTTP_500_INTERNAL_SERVER_ERROR)