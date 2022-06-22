from rest_framework.views import exception_handler


# https://www.django-rest-framework.org/api-guide/exceptions/#custom-exception-handling
def custom_exception_handler(exc, context):
    response = exception_handler(exc, context)
    if response is not None:
        if 'detail' in response.data:
            # Move contents of detail to message
            response.data['message'] = response.data['detail']
            del response.data['detail']
        # Add status code
        response.data['status_code'] = response.status_code
    return response
