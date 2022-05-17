from typing import List, Union

from rest_framework import serializers

from backend.canvas_app_explorer import models
from backend.canvas_app_explorer.data_class import ExternalTool

class CanvasPlacementSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.CanvasPlacement
        fields = '__all__'

class LtiToolSerializer(serializers.ModelSerializer):
    # Addiitonal expanded ead only field to make it easier on the front-end
    canvas_placement_expanded = CanvasPlacementSerializer(read_only=True, many=True, source="canvas_placement")
    enabled = serializers.SerializerMethodField()

    class Meta:
        model = models.LtiTool
        fields = '__all__'

    def get_enabled(self, obj: models.LtiTool) -> Union[bool, None]:
        available_tools = self.context['available_tools']
        matches: List[ExternalTool] = list(filter(lambda x: x.id == obj.canvas_id, available_tools))
        if len(matches) > 0:
            first_match = matches[0] # Canvas IDs should be unique
            return not first_match.is_hidden
        return None
