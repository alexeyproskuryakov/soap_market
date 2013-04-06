# coding:utf-8
import json
from random import Random
import uuid

from django.contrib import messages
from django.core.exceptions import ValidationError
from django.http import HttpResponse, Http404
from django.shortcuts import redirect
from django.views.generic import TemplateView, FormView
from django.db.models import *

from djorm_expressions.base import SqlExpression, OR

from market.forms import OrderForm
from market.helpers import soups_from_basket_, soups_from_basket_json
from market.models import Soup, Basket, Order, CartEmptyMessage


class MainPageView(TemplateView):
    template_name = 'main.html'

    def render_to_response(self, context, **response_kwargs):
        message = CartEmptyMessage.objects.get_random(u'M')
        if message:
            messages.info(self.request, message.text)

        colors = Soup.objects.values('color').annotate(Count('id'))
        for color in colors:
            soups = Soup.objects.filter(color=color['color'])[:5]
            color['soups'] = soups
            color['color_url'] = color['color'][1:]

        context['categories'] = colors
        return super(MainPageView, self).render_to_response(context, **response_kwargs)


class ColorCategoryView(TemplateView):
    template_name = 'color.html'

    def get_context_data(self, **kwargs):
        color = kwargs.get('color', 'ffffff')
        color = '#%s' % color
        return {'color': color}


    def render_to_response(self, context, **response_kwargs):
        color = context['color']
        context['soups'] = Soup.objects.filter(color=color)
        return super(ColorCategoryView, self).render_to_response(context, **response_kwargs)


class DescriptionView(TemplateView):
    template_name = "description.html"

    def render_to_response(self, context, **response_kwargs):
        soup = Soup.objects.get(pk=context['params']['pk'])
        expressions = [SqlExpression('tags', '@>', [tag]) for tag in soup.tags]
        expression = OR(*tuple(expressions))
        relevants = [el for el in Soup.objects.where(expression) if el.id != soup.id]
        context['relevants'] = relevants
        context['soup'] = soup
        return super(DescriptionView, self).render_to_response(context, **response_kwargs)


class OrderFormView(FormView):
    form_class = OrderForm
    template_name = "order.html"
    success_url = '/thanks/'

    def render_to_response(self, context, **response_kwargs):
        session = self.request.COOKIES['sessionid']
        basket = Basket.objects.get(session=session, ordered=False)
        context = dict(context, **soups_from_basket_(basket))
        return super(OrderFormView, self).render_to_response(context, **response_kwargs)

    def post(self, request, *args, **kwargs):
        form = OrderForm(request.POST)
        if not form.is_valid():
            return self.render_to_response(context={'form': form, 'errors': form.errors})
        try:
            cleaned_data = form.clean()
        except ValidationError:
            return self.render_to_response(context={'form': form, 'errors': form.errors})

        basket = Basket.objects.get(session=self.request.COOKIES['sessionid'], ordered=False)
        soups_from_basket = soups_from_basket_(basket)

        Order.objects.create(
            basket=basket,
            client_phone=cleaned_data.get('client_phone'),
            when=cleaned_data.get('when'),
            where=cleaned_data.get('where'),
            positions_sum=soups_from_basket['price'],
            who=request.META.get('REMOTE_ADDR')
        )
        basket.ordered = True
        basket.save()
        return redirect(self.success_url)


class ThanksView(TemplateView):
    template_name = 'thanks_ru.html'


class SoupSearchView(TemplateView, ):
    template_name = 'search.html'

    def render_to_response(self, context, **response_kwargs):
        context['soups'] = Soup.objects.all()
        return super(SoupSearchView, self).render_to_response(context, **response_kwargs)


def add_to_cart_ajax_request(request):
    if request.method == 'POST':
        position = int(request.POST['position'])
        session = request.COOKIES.get('sessionid', None)

        if not session:
            new_session = str(uuid.uuid4())
            basket = Basket(session=new_session, positions=[position], ordered=False,
                            who=request.META.get('REMOTE_ADDR'))
            basket.save()
            response = soups_from_basket_json(basket)
            response.set_cookie('sessionid', new_session)
            return response

        basket = Basket.objects.get_or_create(session=session, ordered=False, who=request.META.get('REMOTE_ADDR'))[0]
        try:
            if not basket.positions:
                basket.positions = [position]
            else:
                basket.positions.append(position)
            basket.save()
            return HttpResponse(soups_from_basket_json(basket), mimetype='application/json')
        except Exception:
            return Http404()

    return HttpResponse(json.dumps({'result': 'failure'}))


def delete_from_cart_ajax_request(request):
    if request.method == 'POST':
        position = int(request.POST['position'])
        session = request.COOKIES.get('sessionid', None)

        if not session:
            return Http404()

        basket = Basket.objects.get(session=session, ordered=False)
        basket.positions.remove(position)
        basket.save()
        return HttpResponse(soups_from_basket_json(basket), mimetype='application/json')


def get_cart_ajax_request(request):
    if request.method == 'POST':
        session = request.COOKIES['sessionid']
        if not session:
            session = uuid.uuid4()
            basket = Basket(session=session, positions=[], ordered=False, who=request.META.get('REMOTE_ADDR'))
            basket.save()
            response = HttpResponse()
            response.set_cookie('sessionid', session)
            return response
        try:
            basket = Basket.objects.get(session=session, ordered=False)
            return HttpResponse(soups_from_basket_json(basket), mimetype='application/json')
        except Basket.DoesNotExist:
            basket = Basket(session=session, positions=[], ordered=False, who=request.META.get('REMOTE_ADDR'))
            basket.save()
            return HttpResponse()


def font_processor(request):
    file_ = open(settings.HEADER_FONT + '.ttf')
    result = HttpResponse(content=file_.read(), content_type='application/x-font-ttf')
    return result
