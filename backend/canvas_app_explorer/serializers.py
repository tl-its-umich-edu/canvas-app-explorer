from backend.canvas_app_explorer import models
from rest_framework import serializers

class CanvasPlacementSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.CanvasPlacement
        fields = '__all__'

class LtiToolSerializer(serializers.ModelSerializer):
    # Addiitonal expanded ead only field to make it easier on the front-end
    canvas_placement_expanded = CanvasPlacementSerializer(read_only=True, many=True, source="canvas_placement")

    class Meta:
        model = models.LtiTool
        fields = '__all__'
