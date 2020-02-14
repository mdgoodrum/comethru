from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import authentication, permissions
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class Authorize(APIView):
    def post(self, request, format=None):
        print(request.data)
        print(authenticate(username=request.data["username"], password=request.data["password"]))
        print(authenticate(username='obviouslywrong', password='whoareyou'))
        return Response({
            "name": "saucy!"
        })