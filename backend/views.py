from canvas_oauth.oauth import get_oauth_token
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import render

@login_required
def get_home_template(request):
    access_token = get_oauth_token(request)
    return render(request, 'home.html')


def get_login_template(request):
    messages.error(request, "You need to launch this tool from a LTI tool provider.")
    return render(request, "error_messages.html")
