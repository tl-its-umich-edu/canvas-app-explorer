from canvas_app_explorer import models
from rest_framework import serializers

class CanvasPlacementSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CanvasPlacement
        fields = '__all__'

class LtiToolSerializer(serializers.ModelSerializer):
    canvas_placement = CanvasPlacementSerializer(read_only=True, many=True)

    class Meta:
        model = models.LtiTool
        fields = '__all__'