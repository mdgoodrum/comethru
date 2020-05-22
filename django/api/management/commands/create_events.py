from django.core.management.base import BaseCommand, CommandError
from django.utils import timezone

from api.models import *

from essential_generators import DocumentGenerator
import datetime, random

class Command(BaseCommand):
    help = 'Creates events.'

    def add_arguments(self, parser):
        parser.add_argument('count', nargs='?', type=int, default=10)

    def handle(self, *args, **options):
        gen = DocumentGenerator()

        for i in range(options['count']):
            params = {
                'title': gen.sentence(),
                'date_published': timezone.now(),
                'short_description': gen.sentence(),
                'description': gen.paragraph(),
                'twenty_one': random.choice([True, False]),
                'organizer': User.objects.order_by("?").first(),
                'venue': Venue.objects.order_by("?").first(),
                'start_time': timezone.now(),
                'end_time': timezone.now(),
            }
            event = Event.objects.create(**params)

            tag_ids = list(Tag.objects.values_list('id', flat=True))
            tag_ids = random.sample(tag_ids, min(len(tag_ids), 5))
            event.tags.set(tag_ids)
            event.save()