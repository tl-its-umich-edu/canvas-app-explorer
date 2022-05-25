from typing import List

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
    navigation_enabled = serializers.SerializerMethodField()

    class Meta:
        model = models.LtiTool
        fields = '__all__'

    def get_navigation_enabled(self, obj: models.LtiTool) -> bool:
        """
        Matching serializer method for navigation_enabled field that finds the expected tool data and
        returns the navigation status
        """
        if 'available_tools' not in self.context:
            raise Exception('"available_tools" must be passed to the LtiToolSerializer context.')
        available_tools = self.context['available_tools']
        # Search in tools available in the context for a canvas ID matching the model instance
        matches: List[ExternalTool] = list(filter(lambda x: x.id == obj.canvas_id, available_tools))
        if len(matches) == 1:
            first_match = matches[0] # Canvas IDs should be unique
            return not first_match.is_hidden
        raise Exception(
            'Expected exactly one match for available tool data from Canvas; '
            f'{len(matches)} were found.'
        )
