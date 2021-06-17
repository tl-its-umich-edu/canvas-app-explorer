from django.contrib import admin
from canvas-app-explorer.backend.models import LtiTool, CanvasPlacement

class LtiToolAdmin(admin.ModelAdmin):
    pass
admin.site.register(LtiTool, LtiToolAdmin)

class CanvasPlacementAdmin(admin.ModelAdmin):
    pass
admin.site.register(CanvasPlacement, CanvasPlacementAdmin)