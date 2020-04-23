from django.contrib.auth.models import User, Group
from rest_framework import serializers
from api.models import *

class DjangoUserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class DjangoGroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'email', 'phone_number']

class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = [
            'title', 
            'date_published', 
            'short_description', 
            'description', 
            'twenty_one', 
            'organizer', 
            'venue', 
            'start_time', 
            'end_time'
        ]

class VenueSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Venue
        fields = ['name', 'address', 'twenty_one']

class AddressSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Venue
        fields = ['name', 'address', 'twenty_one']
        fields = [
            'street_number',
            'street_name',
            'street_type',
            'street_direction',
            'address_type',
            'address_type_id',
            'minor_municipality',
            'major_municipality',
            'governing_district',
            'postal_area',
            'country'
        ]