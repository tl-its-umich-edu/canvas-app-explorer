from typing import List

from rest_framework import fields, serializers

from backend.canvas_app_explorer import models
from backend.canvas_app_explorer.canvas_lti_manager.data_class import ExternalToolTab

class CanvasPlacementSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.CanvasPlacement
        fields = '__all__'

class LtiToolSerializer(serializers.ModelSerializer):
    # Addiitonal expanded ead only field to make it easier on the front-end
    canvas_placement_expanded = CanvasPlacementSerializer(read_only=True, many=True, source="canvas_placement")

    class Meta:
        model = models.LtiTool
        fields = [
            'name', 'canvas_id', 'logo_image', 'logo_image_alt_text', 'main_image',
            'main_image_alt_text', 'short_description', 'long_description', 'privacy_agreement',
            'support_resources', 'canvas_placement_expanded'
        ]

class LtiToolWithNavSerializer(LtiToolSerializer):
    navigation_enabled = serializers.SerializerMethodField()

    def get_navigation_enabled(self, obj: models.LtiTool) -> bool:
        """
        Matching serializer method for navigation_enabled field that finds the expected tool data and
        returns the navigation status
        """
        if 'available_tools' not in self.context:
            raise Exception('"available_tools" must be passed to the LtiToolSerializer context.')
        available_tools = self.context['available_tools']
        # Search in tools available in the context for a canvas ID matching the model instance
        matches: List[ExternalToolTab] = list(filter(lambda x: x.id == obj.canvas_id, available_tools))
        if len(matches) == 1:
            first_match = matches[0] # Canvas IDs should be unique
            return not first_match.is_hidden
        raise Exception(
            'Expected exactly one match for available tool data from Canvas; '
            f'{len(matches)} were found.'
        )

    class Meta(LtiToolSerializer.Meta):
        fields = LtiToolSerializer.Meta.fields + ['navigation_enabled']

class UpdateLtiToolNavigationSerializer(serializers.Serializer):
    navigation_enabled = fields.BooleanField()
