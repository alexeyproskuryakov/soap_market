from django.conf import settings

__author__ = '4ikist'


def header_font(request):
    """
    Adds static-related context variables to the context.

    """
    return {'header_font': settings.HEADER_FONT}
