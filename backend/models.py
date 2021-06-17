from django.db import models

class LtiTool(models.Model):
    name = models.CharField(max_length=50)
    logo_image = models.BinaryField()
    main_image = models.BinaryField()
    short_description = models.TextField()
    long_description = models.TextField()
    privacy_agreement = models.TextField()
    support_resources = models.TextField()
    canvas_placmenet = models.IntegerField()

class CanvasPlacement(models.Model):
    name = models.CharField(max_length=150)

