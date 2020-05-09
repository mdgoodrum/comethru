from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    pass

    def __str__(self):
        return self.username

class Tag(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name
    
class Event(models.Model):
    title = models.CharField(max_length=128)
    date_published = models.DateTimeField()
    short_description = models.TextField()
    description = models.TextField()
    twenty_one = models.BooleanField()
    tags = models.ManyToManyField('Tag', related_name='tags')
    organizer = models.ForeignKey('User', on_delete=models.CASCADE, related_name='organizer')
    venue = models.ForeignKey('Venue', on_delete=models.SET_NULL, related_name='venue', null=True)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()

    def __str__(self):
        return self.title

class Venue(models.Model):
    name = models.TextField()
    address = models.ForeignKey('Address', related_name='address', on_delete=models.SET_NULL, null=True)
    twenty_one = models.BooleanField()

    def __str__(self):
        return self.name

# https://endswithsaurus.wordpress.com/2009/07/23/a-lesson-in-address-storage/
class Address(models.Model):
    street_number = models.IntegerField()
    street_name = models.TextField()
    street_type = models.TextField()
    street_direction = models.TextField(blank=True)
    address_type = models.TextField(blank=True)
    address_type_id = models.TextField(blank=True)
    minor_municipality = models.TextField(blank=True)
    major_municipality = models.TextField()
    governing_district = models.TextField()
    postal_area = models.TextField()
    country = models.TextField()

    def __str__(self):
        return str(self.street_number) + " " + self.street_name + " " + self.street_type

class EventInterest(models.Model):
    NONE = 'NONE'
    GOING = 'GOING'
    INTERESTED = 'INTERESTED'
    interest_types = (
        (NONE, 'None'),
        (GOING, 'Going'),
        (INTERESTED, 'Interested')
    )

    user = models.ForeignKey(
        'User', 
        on_delete=models.CASCADE, 
        related_name='user')

    event = models.ForeignKey(
        'Event', 
        on_delete=models.CASCADE, 
        related_name='user')

    status = models.CharField(
        max_length=16,
        choices=interest_types,
        default=NONE)

    def __str__(self):
        return f'{self.user}, {self.event}, {self.status}'