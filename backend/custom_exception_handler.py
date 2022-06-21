from rest_framework.views import exception_handler


def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)

    if response is not None:
        if 'detail' in response.data:
            response.data = { 'message': response.data['detail'] }
        response.data['status_code'] = response.status_code
    return response
