from django.shortcuts import render

from rest_framework import permissions, viewsets

from canvas_app_explorer import models, serializers


class LTIToolViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = models.LtiTool.objects.all()
    serializer_class = serializers.LtiToolSerializer

    # This may later change to DjangoModelPermissions, or IsAdminUser might be fine
    # This allows ReadOnly to GET but only Admin can modify
    permission_classes = [permissions.IsAdminUser, permissions.IsAuthenticatedOrReadOnly]
