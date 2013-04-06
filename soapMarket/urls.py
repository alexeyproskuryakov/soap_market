from django.conf.urls import patterns, include, url
from django.conf import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
from market.views import *

admin.autodiscover()




urlpatterns = patterns('',
                       url(r'^admin/', include(admin.site.urls)),

                       url(r'^$', MainPageView.as_view()),
                       url(r'^\#/$', MainPageView.as_view()),
                       url(r'^color/(?P<color>[0-9A-Fa-f]{6})/$', ColorCategoryView.as_view()),

                       url(r'^form_order/$', OrderFormView.as_view(), name='form_order'),
                       url(r'^description/(?P<pk>\d+)/$', DescriptionView.as_view()),

                       url(r'^thanks/$', ThanksView.as_view(), name='thanks'),
                       #for AJAX request:
                       url(r'^search/', SoupSearchView.as_view(), name='search'),
                       url(r'^add_to_cart/', add_to_cart_ajax_request),
                       url(r'^delete_from_cart/', delete_from_cart_ajax_request),
                       url(r'^get_cart/', get_cart_ajax_request),


)

if settings.DEBUG:
    from django.contrib.staticfiles.urls import static

    urlpatterns += static(settings.STATIC_URL, **{'document_root': settings.STATIC_ROOT})
    urlpatterns += static(settings.MEDIA_URL, **{'document_root': settings.MEDIA_ROOT})
