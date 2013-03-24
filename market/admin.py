# coding=utf-8
from django.contrib.contenttypes import generic
from django.utils.safestring import mark_safe

__author__ = '4ikist'
import re

from django import forms
from django.contrib import admin
from models import Basket, Comment, Order, Soup
from django.utils.translation import ugettext_lazy as _
from django.forms import CharField, widgets, TextInput

from market.helpers import soups_from_basket_

tags_regexp = re.compile('[\S]+')


class SoupOrderWidget(widgets.MultiWidget):
    def render(self, name, value, attrs=None):
        pass


class TagWidget(widgets.TextInput):
    def render(self, name, value, attrs=None):
        if not value:
            value = ''
        else:
            value = ' '.join(value)
        return super(TagWidget, self).render(name, value, attrs)


class SoupModelForm(forms.ModelForm):
    class Meta:
        model = Soup
        widgets = {
            'tags': TagWidget(),
        }

        fields = {
            'name',
            'description',
            'tags',
            'image',
            'price',
            'color'
        }

    def clean(self):
        tags = self.cleaned_data['tags']
        tags = tags_regexp.findall(tags)
        if len(tags) > 0:
            self.cleaned_data['tags'] = tags

        return self.cleaned_data


class SoupModelAdmin(admin.ModelAdmin):
    form = SoupModelForm
    save_as = True

    list_display = (
        'name',
        'price',
        'description',
        'get_thumbnail_html',
        'get_color_html'
    )


class OrderModelAdmin(admin.ModelAdmin):
    readonly_fields = (
        'client_phone',
        'positions_sum',
        'when',
        'where',
        'description',
        'time_created',
    )
    fieldsets = (
        (u'Реквизиты заказа', {'fields': ('state', 'client_phone', 'positions_sum', ('where', 'when'), 'description')}),
    )
    list_display = (
        'client_phone',
        'positions_sum',
        'when',
        'where',
        'state',
        'time_created',
    )
    list_filter = ('state',)
    search_fields = ('client_phone', 'where', 'when', 'state')
    date_hierarchy = 'when'
    ordering = (
        'when',
    )
    actions = ['make_broken']

    def make_broken(self, request, queryset):
        queryset.update(status='B')

    make_broken.short_description = u"Обозначить заказы как неудавшиеся"

    def render_change_form(self, request, context, add=False, change=False, form_url='', obj=None):
        order = Order.objects.get(pk=int(context['object_id']))
        context['soups'] = soups_from_basket_(order.basket)['data']

        return super(OrderModelAdmin, self).render_change_form(request, context, add=add, change=change,
                                                               form_url=form_url,
                                                               obj=obj)


admin.site.register(Order, OrderModelAdmin)
admin.site.register(Soup, SoupModelAdmin)
admin.site.register(Comment)
