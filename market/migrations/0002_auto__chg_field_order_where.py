# -*- coding: utf-8 -*-
import datetime
from south.db import db
from south.v2 import SchemaMigration
from django.db import models


class Migration(SchemaMigration):

    def forwards(self, orm):

        # Changing field 'Order.where'
        db.alter_column('market_order', 'where', self.gf('django.db.models.fields.TextField')(max_length=250, null=True))

    def backwards(self, orm):

        # Changing field 'Order.where'
        db.alter_column('market_order', 'where', self.gf('django.db.models.fields.TextField')(max_length=250))

    models = {
        'market.basket': {
            'Meta': {'object_name': 'Basket'},
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'ordered': ('django.db.models.fields.BooleanField', [], {'default': 'False'}),
            'positions': ('djorm_pgarray.fields.ArrayField', [], {'default': 'None', 'null': 'True', 'blank': 'True'}),
            'session': ('django.db.models.fields.CharField', [], {'max_length': '100'}),
            'time': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'who': ('django.db.models.fields.IPAddressField', [], {'max_length': '15'})
        },
        'market.comment': {
            'Meta': {'object_name': 'Comment'},
            'date': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'soup': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['market.Soup']"}),
            'text': ('django.db.models.fields.TextField', [], {'max_length': '250'}),
            'user': ('django.db.models.fields.CharField', [], {'max_length': '25'}),
            'who': ('django.db.models.fields.IPAddressField', [], {'max_length': '15'})
        },
        'market.order': {
            'Meta': {'object_name': 'Order'},
            'basket': ('django.db.models.fields.related.ForeignKey', [], {'to': "orm['market.Basket']"}),
            'client_phone': ('django.db.models.fields.CharField', [], {'max_length': '11'}),
            'description': ('django.db.models.fields.TextField', [], {'max_length': '250', 'null': 'True'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'positions_sum': ('django.db.models.fields.PositiveIntegerField', [], {}),
            'state': ('django.db.models.fields.CharField', [], {'default': "'N'", 'max_length': '1'}),
            'time_created': ('django.db.models.fields.DateTimeField', [], {'auto_now_add': 'True', 'blank': 'True'}),
            'when': ('django.db.models.fields.DateTimeField', [], {'null': 'True'}),
            'where': ('django.db.models.fields.TextField', [], {'default': "'office'", 'max_length': '250', 'null': 'True'}),
            'who': ('django.db.models.fields.IPAddressField', [], {'max_length': '15'})
        },
        'market.soup': {
            'Meta': {'object_name': 'Soup'},
            'color': ('paintstore.fields.ColorPickerField', [], {'max_length': '7'}),
            'description': ('django.db.models.fields.TextField', [], {'max_length': '400'}),
            'id': ('django.db.models.fields.AutoField', [], {'primary_key': 'True'}),
            'image': ('django.db.models.fields.files.ImageField', [], {'max_length': '100'}),
            'name': ('django.db.models.fields.CharField', [], {'max_length': '250'}),
            'price': ('django.db.models.fields.SmallIntegerField', [], {}),
            'smell': ('django.db.models.fields.CharField', [], {'max_length': '250'}),
            'tags': ('djorm_pgarray.fields.ArrayField', [], {'default': 'None', 'dbtype': "'text'", 'null': 'True', 'blank': 'True'})
        }
    }

    complete_apps = ['market']