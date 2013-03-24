# coding: utf-8
from datetime import datetime
from django.core.validators import RegexValidator

from django.forms import ModelForm, Textarea, DateTimeInput, forms, fields, Form
from market.models import Order

__author__ = '4ikist'


class WhereWidget(Textarea):
    def render(self, name, value, attrs=None):
        return super(WhereWidget, self).render(name, value, attrs)


phone_validator = RegexValidator('\d{10}', u'Не корректно введен телефон.')


class OrderForm(ModelForm):
    client_phone = fields.CharField(label=u'Ваш телефон, без восьмерки',
                                    min_length=10, max_length=11,
                                    validators=[phone_validator])

    when = fields.DateTimeField(label=u'Когда Вам удобно получить заказ?',
                                input_formats=('%d.%m.%Y %H:%M',),
                                required=False
    )

    where = fields.CharField(label=u'Куда Вам удобно чтобы приехал курьер?',
                             max_length=250,
                             widget=WhereWidget(attrs={'cols': 5, 'rows': 3}),
                             initial=u'Никуда, я подьеду сам к вам на ст.м. Проспект Ветеранов',
                             required=False
    )

    description = fields.CharField(label=u'Дополнительная информация',
                                   max_length=250,
                                   widget=Textarea(attrs={'cols': 5, 'rows': 3}),
                                   required=False)


    class Meta():
        model = Order
        fields = ('client_phone', 'when', 'where', 'description',  )

    def clean(self):
        cleaned_data = super(OrderForm, self).clean()
        client_phone = cleaned_data.get('client_phone')
        if not client_phone or client_phone == u'' or not phone_validator.regex.match(client_phone):
            self.errors['client_phone'] = phone_validator.message
        where = cleaned_data.get('where')
        if where == self.fields['where'].initial:
            cleaned_data['where'] = 'office'
        return cleaned_data
