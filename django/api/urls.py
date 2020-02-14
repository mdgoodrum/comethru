from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from api.views import *
from api.endpoints.authorize import Authorize

urlpatterns = [
    path('authorize/', Authorize.as_view())
]