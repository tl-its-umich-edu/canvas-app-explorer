# Generated by Django 3.2.4 on 2021-06-18 14:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CanvasPlacement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='LtiTool',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('logo_image', models.BinaryField()),
                ('main_image', models.BinaryField()),
                ('short_description', models.TextField()),
                ('long_description', models.TextField()),
                ('privacy_agreement', models.TextField()),
                ('support_resources', models.TextField()),
                ('canvas_placement', models.ManyToManyField(to='canvas_app_explorer.CanvasPlacement')),
            ],
        ),
    ]
