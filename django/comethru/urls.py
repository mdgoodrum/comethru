"""comethru URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers

from api.admin import admin_site
from api.views import *
from api.endpoints.authorize import Authorize

router = routers.DefaultRouter()
router.register(r'django_users', UserViewSet)
router.register(r'groups', DjangoGroupViewSet)
router.register(r'users', UserViewSet)
router.register(r'events', EventViewSet)
router.register(r'venues', VenueViewSet)

urlpatterns = [
    path('', Index),
    path('admin/', admin_site.urls),
    path('api/models/', include(router.urls)),
    path('api/', include('api.urls')),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('accounts/', include('django.contrib.auth.urls')),
]
