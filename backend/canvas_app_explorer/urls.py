from . import lti1p3
from django.urls import include, path, re_path 

urlpatterns = [
    path('lti/login/', lti1p3.login, name='lti_login'),
    path('lti/launch/', lti1p3.launch, name='lti_launch'),
    path('lti/jwks/', lti1p3.get_jwks, name='lti_get_jwks'),
    path('lti/config/', lti1p3.generate_config_json, name=lti1p3.generate_config_json.__name__),
    path('tinymce/', include('tinymce.urls')),
    path('oauth/', include('canvas_oauth.urls')),
]
