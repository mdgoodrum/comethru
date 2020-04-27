from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions, status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class Authorize(APIView):
    def post(self, request, format=None):
        user = authenticate(username=request.data["username"], password=request.data["password"])
        response_data = {}
        response_status = status.HTTP_401_UNAUTHORIZED if not user else status.HTTP_200_OK
        return Response(data=response_data, status=response_status)