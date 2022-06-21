from typing import Any, Dict

from django.conf import settings
from django.http import HttpRequest

from .serializers import GlobalsUserSerializer


def cae_globals(request: HttpRequest) -> Dict[str, Any]:
    user_data = GlobalsUserSerializer(request.user).data if request.user.is_authenticated else None

    return {
        'cae_globals': {
            'user': user_data,
            'help_url': settings.HELP_URL
        }
    }
