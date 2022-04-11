"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
import os
from django.contrib import admin
from django.contrib.auth import views as auth_views

from django.conf import settings
from django.urls import include, path, re_path 
from django.views.generic import TemplateView
from django.views import static
from rest_framework import routers

from backend.canvas_app_explorer import urls as canvas_app_explorer_urls #type: ignore
from backend.canvas_app_explorer import views as canvas_app_explorer_views #type: ignore

from . import views
# This is for Django Rest Framework
router = routers.DefaultRouter()
router.register(r'lti_tools', canvas_app_explorer_views.LTIToolViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/auth/', include('rest_framework.urls', namespace='rest_framework')),

    path('admin/', admin.site.urls),
    path('', views.get_home_template, name = 'home'),

    # For file storage
    re_path(r'^files/', include('db_file_storage.urls')),
    path('',include(canvas_app_explorer_urls))
]

# This is to aid local development. 
# This exposes the frontend/public/plasmic directory on a url in static and allows browsing.
# Whitenoise currently handles this otherwise
if settings.DEBUG:
    from django.contrib.staticfiles import views as static_views

    urlpatterns += [
        re_path(r'^static/plasmic/(?P<path>.*)$', 
            view = static.serve, 
            kwargs = {
                'document_root': os.path.join(settings.BASE_DIR, 'frontend/public/plasmic'), 
                'show_indexes' : True
            }
        ),
        # Matches STATIC_URL in settings
        re_path(r'^django_static/(?P<path>.*)$', static_views.serve),
    ]


