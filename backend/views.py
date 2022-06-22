from canvas_oauth.oauth import get_oauth_token, handle_missing_token
from canvas_oauth.models import CanvasOAuth2Token
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.contrib.auth.models import User
import logging

logger = logging.getLogger(__name__)

@login_required
def get_home_template(request):
    try:
        access_token = get_oauth_token(request)
    except Exception as err:
        logger.error(err)
        if 'refresh_token request failed to get a token' in str(err):
            logger.error("removing invalid refresh_token")
            CanvasOAuth2Token.objects.filter(user=request.user).delete()
        # prompt for new OAuth token
        return handle_missing_token(request)

    return render(request, 'home.html')
