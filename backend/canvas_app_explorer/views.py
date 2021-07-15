from django.shortcuts import render

from rest_framework import permissions, viewsets

from . import models, serializers


class LTIToolViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = models.LtiTool.objects.all()
    serializer_class = serializers.LtiToolSerializer

    permission_classes = [permissions.DjangoModelPermissionsOrAnonReadOnly]
