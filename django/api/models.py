from django.db import models

# Create your models here.
class User(models.Model):
    name = models.TextField()
    email = models.TextField()
    phone_number = models.TextField()

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name
    
class Event(models.Model):
    title = models.CharField(max_length=128)
    date_published = models.DateTimeField()
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
    address = models.TextField()
    twenty_one = models.BooleanField()

    def __str__(self):
        return self.name