import logging

from canvas_oauth.oauth import get_oauth_token, handle_missing_token
from canvas_oauth.models import CanvasOAuth2Token
from canvas_oauth.exceptions import InvalidOAuthReturnError

from django.contrib.auth.decorators import login_required
from django.shortcuts import render


logger = logging.getLogger(__name__)

@login_required
def get_home_template(request):
    try:
        get_oauth_token(request)
    except InvalidOAuthReturnError:
        logger.error(f"InvalidOAuthReturnError for user: {request.user}. Remove invalid refresh_token and prompt for reauthentication.")
        CanvasOAuth2Token.objects.filter(user=request.user).delete()
        return handle_missing_token(request)
    
    return render(request, 'home.html')
