import logging

from canvas_oauth.oauth import get_oauth_token
from django.conf import settings
from drf_spectacular.utils import extend_schema, OpenApiParameter
from rest_framework import authentication, permissions, views, viewsets
from rest_framework.request import Request
from rest_framework.response import Response

from backend.canvas_app_explorer import models, serializers
from .canvas_lti_manager import CanvasLtiManager

logger = logging.getLogger(__name__)

class LTIToolViewSet(viewsets.ViewSet):
    """
    API endpoint that lists LTI tools available in the course context, and allows for enabling/disabling navigation.
    """
    authentication_classes = [authentication.SessionAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    lookup_url_kwarg = 'canvas_id'

    def list(self, request: Request) -> Response:
        access_token = get_oauth_token(request)
        logger.debug(f"Course ID: {request.session['course_id']}")
        manager = CanvasLtiManager(
            f'https://{settings.CANVAS_OAUTH_CANVAS_DOMAIN}',
            access_token,
            request.session['course_id']
        )
        available_tools = manager.get_tools_available_in_course()
        logger.debug('available_tools: ' + ', '.join([tool.__str__() for tool in available_tools]))
        available_tool_ids = [t.id for t in available_tools]
        queryset = models.LtiTool.objects.filter(canvas_id__isnull=False, canvas_id__in=available_tool_ids)
        serializer = serializers.LtiToolWithNavSerializer(
            queryset, many=True, context={ 'available_tools': available_tools }
        )
        return Response(serializer.data)

    @extend_schema(parameters=[OpenApiParameter(
        'canvas_id', location='path', required=True
    )])
    def update(self, request: Request, canvas_id: int):
        access_token = get_oauth_token(request)
        manager = CanvasLtiManager(
            f'https://{settings.CANVAS_OAUTH_CANVAS_DOMAIN}',
            access_token,
            request.session['course_id']
        )
        return Response({ 'canvas_id': canvas_id })
