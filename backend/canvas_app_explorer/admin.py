# Register your models here.

from django.contrib import admin
from canvas_app_explorer.models import LtiTool, CanvasPlacement

class LtiToolAdmin(admin.ModelAdmin):
    pass
admin.site.register(LtiTool, LtiToolAdmin)

class CanvasPlacementAdmin(admin.ModelAdmin):
    pass
admin.site.register(CanvasPlacement, CanvasPlacementAdmin) 
