from django.contrib.auth.models import Group
from rest_framework import serializers
from api.models import *

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'password', 'first_name', 'last_name', 'groups']

class DjangoGroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']

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
            'end_time',
            'id'
        ]

class VenueSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Venue
        fields = ['name', 'address', 'twenty_one']

class AddressSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Address
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