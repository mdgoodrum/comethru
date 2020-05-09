from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions, status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from ..serializers import UserSerializer

class Authorize(APIView):
    def post(self, request, format=None):
        user = authenticate(username=request.data["username"], password=request.data["password"])
        if not user:
            return Response(data={}, status=status.HTTP_401_UNAUTHORIZED)

        return Response(data=UserSerializer(user).data, status=status.HTTP_200_OK)