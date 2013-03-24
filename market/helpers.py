from collections import Counter
import json
from market.models import Soup

__author__ = '4ikist'


def soups_from_basket_(basket):
    soups = []
    all_price = 0
    c = Counter(basket.positions)
    all_positions = sorted(c)
    for position in all_positions:
        soup = Soup.objects.get(pk=position)
        soups.append(
            {'pk': soup.pk, 'color': soup.color, 'name': soup.name, 'image_url': soup.image_url,
             'count': c[position],
             'price': soup.price * int(c[position])})

        all_price += soup.price * int(c[position])

    response_data = {'result': 'ok'}
    response_data['data'] = list(soups)
    response_data['price'] = all_price
    return response_data


def soups_from_basket_json(basket):
    result = json.dumps(soups_from_basket_(basket))
    return result
