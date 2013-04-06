from django.db import models
import random

__author__ = '4ikist'


class CartEmptyMessageManager(models.Manager):
    def get_random(self, page_name):
        qs = self.filter(page_name__in=[page_name, 'A'])
        if qs.count():
            return random.Random().choice(list(qs))
        return None