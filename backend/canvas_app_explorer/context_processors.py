import logging

from django.conf import settings
from django.http import HttpRequest

logger = logging.getLogger(__name__)

from .serializers import GlobalsUserSerializer

def cae_globals(request: HttpRequest):
    user_data = GlobalsUserSerializer(request.user).data if request.user.is_authenticated else None

    return {
        'cae_globals': {
            'user': user_data,
            'help_url': settings.HELP_URL
        }
    }
