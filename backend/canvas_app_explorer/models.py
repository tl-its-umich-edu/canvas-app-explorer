from django.core.exceptions import ValidationError
from django.db import models
from django.utils.deconstruct import deconstructible
from django.utils.html import strip_tags
from db_file_storage.model_utils import delete_file, delete_file_if_needed
from tinymce.models import HTMLField

# Based on the built in validators 
# https://github.com/django/django/blob/main/django/core/validators.py
# Use in your model as validators=[MaxLenIgnoreHTMLValidator(max_length=120)]
@deconstructible
class MaxLenIgnoreHTMLValidator:
    max_length = 120
    def __init__(self, max_length=None):
        pass
        if max_length is not None:
            self.max_length = max_length

    def __call__(self, value: str):
        # Return the value not considering HTML tags that won't be displayed
        value = strip_tags(value.strip())
        if len(value) > self.max_length:
            raise ValidationError(
                (f'This field without tags is {len(value)}, which is greater than the max length of {self.max_length}.'),
            )

### Models are below
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
    canvas_id = models.IntegerField(unique=True, blank=True, null=True)
    logo_image = models.ImageField(upload_to='canvas_app_explorer.LogoImage/bytes/filename/mimetype', blank=True, null=True)
    logo_image_alt_text = models.CharField(max_length=255, blank=True, null=True)
    main_image = models.ImageField(upload_to='canvas_app_explorer.MainImage/bytes/filename/mimetype', blank=True, null=True)
    main_image_alt_text = models.CharField(max_length=255, blank=True, null=True)
    short_description = HTMLField(validators=[MaxLenIgnoreHTMLValidator(max_length=120)])
    long_description = HTMLField()
    privacy_agreement = HTMLField()
    support_resources = HTMLField()
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
