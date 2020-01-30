from django.contrib import admin

from .models import *

from django.contrib.admin import AdminSite

class ComeThruAdminSite(AdminSite):
    site_header = 'COME THRU'

admin_site = ComeThruAdminSite(name='myadmin')

admin_site.register(User)
admin_site.register(Tag)
admin_site.register(Event)
admin_site.register(Venue)


