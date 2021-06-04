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
from django.conf import settings
from django.urls import path, re_path 
from django.views.generic import TemplateView
from django.views import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='home.html'), name='home'),
    # TODO: Switch this to collectstatic and put it in static
    re_path(r'^%s(?P<path>.*)$' % settings.STATIC_URL[1:], 
        view = static.serve, 
        kwargs = {'document_root': 
            os.path.join(settings.BASE_DIR, 'frontend/public/'), 
            'show_indexes' : True
            }
        )
    ]
