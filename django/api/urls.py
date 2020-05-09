from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from api.views import *

from api.endpoints.authorize import Authorize
from api.endpoints.add_user import AddUser
from api.endpoints.does_user_exist import DoesUserExist
from api.endpoints.event_interest import GetEventInterest
from api.endpoints.events import Events
from api.endpoints.venues import Venues

urlpatterns = [
    path('authorize/', Authorize.as_view()),
    path('add_user/', AddUser.as_view()),
    path('does_user_exist/', DoesUserExist.as_view()),
    path('event_interest/', GetEventInterest.as_view()),
    path('events/', Events.as_view()),
    path('venues/', Venues.as_view()),
]