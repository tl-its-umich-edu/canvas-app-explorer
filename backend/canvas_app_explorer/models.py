from django.db import models
from db_file_storage.model_utils import delete_file, delete_file_if_needed
from django_quill.fields import QuillField

# Create your models here.

class CanvasPlacement(models.Model):
    name = models.CharField(max_length=150)
    def __str__(self):
        return self.name

class LogoImage(models.Model):
    bytes = models.TextField()
    filename = models.CharField(max_length=255)
    mimetype = models.CharField(max_length=50)

class MainImage(models.Model):
    bytes = models.TextField()
    filename = models.CharField(max_length=255)
    mimetype = models.CharField(max_length=50)

class LtiTool(models.Model):
    name = models.CharField(max_length=50)
    logo_image = models.ImageField(upload_to='canvas_app_explorer.LogoImage/bytes/filename/mimetype', blank=True, null=True)
    main_image = models.ImageField(upload_to='canvas_app_explorer.MainImage/bytes/filename/mimetype', blank=True, null=True)
    short_description = QuillField()
    long_description = QuillField()
    privacy_agreement = QuillField()
    support_resources = QuillField()
    canvas_placement = models.ManyToManyField(CanvasPlacement)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        delete_file_if_needed(self, 'logo_image')
        delete_file_if_needed(self, 'main_image')
        super().save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        super().delete(*args, **kwargs)
        delete_file_if_needed(self, 'logo_image')
        delete_file_if_needed(self, 'main_image')
