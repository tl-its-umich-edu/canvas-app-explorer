import logging

from canvas_oauth.oauth import get_oauth_token, handle_missing_token
from canvas_oauth.models import CanvasOAuth2Token
from canvas_oauth.exceptions import CanvasOAuthError, MissingTokenError, InvalidOAuthStateError, InvalidOAuthReturnError

from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.shortcuts import render


logger = logging.getLogger(__name__)

@login_required
def get_home_template(request):
    try:
        access_token = get_oauth_token(request)
    except InvalidOAuthStateError as err:
        logger.error("InvalidOAuthStateError. Remove invalid refresh_token and prompt for reauthentication.")
        CanvasOAuth2Token.objects.filter(user=request.user).delete()
        return handle_missing_token(request)
    except InvalidOAuthReturnError as err:
        logger.error("InvalidOAuthReturnError. Remove invalid refresh_token and prompt for reauthentication.")
        CanvasOAuth2Token.objects.filter(user=request.user).delete()
        return handle_missing_token(request)
    except MissingTokenError as err:
        logger.error("MissingTokenError. Prompt for reauthentication.")
        return handle_missing_token(request)
    except CanvasOAuthError as err:
        logger.error("CanvasOAuthError. Remove invalid refresh_token and prompt for reauthentication.")
        CanvasOAuth2Token.objects.filter(user=request.user).delete()
        return handle_missing_token(request)
    except Exception as err:
        logger.error(err)

    return render(request, 'home.html')
