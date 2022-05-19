from canvas_oauth.oauth import get_oauth_token
from django.conf import settings
from rest_framework import permissions, viewsets
from rest_framework.request import Request

from backend.canvas_app_explorer import models, serializers
from .canvas_lti_manager import CanvasLtiManager

class LTIToolViewSet(viewsets.ModelViewSet):
    """
    API endpoint that lists LTI tools available in the course context
    """
    serializer_class = serializers.LtiToolSerializer
    permission_classes = [permissions.DjangoModelPermissions]
    queryset = models.LtiTool.objects.all()

    def get_serializer_context(self):
        """
        Extends context for LtiToolSerializer to include data (from the Cavnas API) about tools available
        in the course and whether they are enabled for the navigation.
        """
        context = super(LTIToolViewSet, self).get_serializer_context()
        request: Request = context['request']
        access_token = get_oauth_token(request)
        manager = CanvasLtiManager(
            f'https://{settings.CANVAS_OAUTH_CANVAS_DOMAIN}',
            access_token,
            request.session['course_id']
        )
        context['available_tools'] = manager.get_tools_available_in_course()
        return context

    def get_queryset(self):
        """
        Overrides default queryset to limit results to LtiTool model instances with a non-null Canvas ID
        and with matching data from Canvas indicating it is available in the course.
        """
        available_tool_ids = [t.id for t in self.get_serializer_context()['available_tools']]
        return models.LtiTool.objects.filter(canvas_id__isnull=False, canvas_id__in=available_tool_ids)
