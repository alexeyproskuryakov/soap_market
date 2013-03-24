# coding:utf-8
from django.db.models.signals import post_save, pre_delete
from django.db import models
from django.utils.safestring import mark_safe
from djorm_expressions.models import ExpressionManager
from djorm_pgarray import fields

from paintstore.fields import ColorPickerField

from contrib import *


class Soup(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField(max_length=400)
    tags = fields.ArrayField(dbtype='text')
    image = models.ImageField(upload_to='images/')
    price = models.SmallIntegerField()

    color = ColorPickerField()
    smell = models.CharField(max_length=250)

    objects = ExpressionManager()

    def get_thumbnail_html(self):
        html = '<a class="image-picker" href="%s"><img src="%s" alt="%s"/></a>'
        return html % (self.image.url, get_thumbnail_url(self.image.url), self.description)

    def get_color_html(self):
        html = '<div style="background:%s; width:50px; height:50px;"></div>' % self.color
        return mark_safe(html)

    get_thumbnail_html.short_description = 'thumbnail'
    get_thumbnail_html.allow_tags = True

    get_color_html.short_description = 'color'
    get_color_html.allow_tags = True

    @property
    def image_url(self):
        return get_thumbnail_url(self.image.url)

    @property
    def big_image_url(self):
        return get_thumbnail_url(self.image.url, size=500)

    @property
    def color_url(self):
        return self.color[1:]


def post_save_handler(sender, **kwargs):
    create_thumbnail(kwargs['instance'].image.path)
    create_thumbnail(kwargs['instance'].image.path, size=500)


def pre_delete_handler(sender, **kwargs):
    delete_thumbnail(kwargs['instance'].image.path)


pre_delete.connect(pre_delete_handler, sender=Soup)
post_save.connect(post_save_handler, sender=Soup)


class Comment(models.Model):
    soup = models.ForeignKey(Soup)
    user = models.CharField(max_length=25)
    text = models.TextField(max_length=250)
    date = models.DateTimeField(auto_now_add=True)
    who = models.IPAddressField(verbose_name=u'Who do it')


class Basket(models.Model):
    positions = fields.ArrayField(dbtype='int')
    time = models.DateTimeField(auto_now_add=True)
    session = models.CharField(max_length=100)
    ordered = models.BooleanField(default=False)
    who = models.IPAddressField(verbose_name=u'Последний IP работавший с корзиной')


class Order(models.Model):
    STATE_CHOICES = (
        ('N', 'New'),
        ('B', 'Broken'),
        ('S', 'Success'),
    )
    basket = models.ForeignKey(Basket, verbose_name=u'Корзина')
    state = models.CharField(max_length=1, verbose_name=u'Состояние', choices=STATE_CHOICES, default='N')
    positions_sum = models.PositiveIntegerField()
    time_created = models.DateTimeField(auto_now_add=True)
    description = models.TextField(verbose_name=u'Дополнительная информация', max_length=250, null=True)
    when = models.DateTimeField(verbose_name=u'Когда удобно', null=True)
    where = models.TextField(verbose_name=u'Где удобно', max_length=250, default='office', null=True)
    who = models.IPAddressField(verbose_name=u'IP адрес заказ')
    client_phone = models.CharField(verbose_name=u'Телефон', max_length=11)

