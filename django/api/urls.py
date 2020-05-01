from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from api.views import *

from api.endpoints.authorize import Authorize
from api.endpoints.add_user import AddUser

urlpatterns = [
    path('authorize/', Authorize.as_view()),
    path('add_user/', AddUser.as_view()),
]