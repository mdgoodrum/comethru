from django.contrib import admin

from .models import *

from django.contrib.admin import AdminSite

class ComeThruAdminSite(AdminSite):
    site_header = 'COME THRU'
admin_site = ComeThruAdminSite(name='myadmin')

class UserAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
admin_site.register(User, UserAdmin)


admin_site.register(Tag)

class EventAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)
admin_site.register(Event, EventAdmin)

admin_site.register(Venue)
admin_site.register(Address)
admin_site.register(EventInterest)


