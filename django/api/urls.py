from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from api.views import *

from api.endpoints.authorize import Authorize
from api.endpoints.add_user import AddUser
from api.endpoints.does_user_exist import DoesUserExist
from api.endpoints.event_interest_for_user import EventInterestForUser

urlpatterns = [
    path('authorize/', Authorize.as_view()),
    path('add_user/', AddUser.as_view()),
    path('does_user_exist/', DoesUserExist.as_view()),
    path('event_interest/', EventInterestForUser.as_view()),
]