# Generated by Django 3.2.9 on 2021-11-03 18:46

from django.db import migrations
import tinymce.models


class Migration(migrations.Migration):

    dependencies = [
        ('canvas_app_explorer', '0003_auto_20210803_1626'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ltitool',
            name='long_description',
            field=tinymce.models.HTMLField(),
        ),
        migrations.AlterField(
            model_name='ltitool',
            name='privacy_agreement',
            field=tinymce.models.HTMLField(),
        ),
        migrations.AlterField(
            model_name='ltitool',
            name='short_description',
            field=tinymce.models.HTMLField(),
        ),
        migrations.AlterField(
            model_name='ltitool',
            name='support_resources',
            field=tinymce.models.HTMLField(),
        ),
    ]
