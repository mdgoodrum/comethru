from django.contrib.auth.models import Group
from rest_framework import serializers
from api.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'username', 
            'email', 
            'first_name', 
            'last_name', 
            'id'
        ]

class DjangoGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = [
            'url', 
            'name'
        ]

class EventSerializer(serializers.ModelSerializer):
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
            'id',
        ]

class VenueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venue
        fields = [
            'name', 
            'address', 
            'twenty_one',
            'id'
        ]

class AddressSerializer(serializers.ModelSerializer):
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
            'country',
            'id'
        ]

class EventInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventInterest
        fields = [
            'user',
            'event',
            'status',
            'id'
        ]