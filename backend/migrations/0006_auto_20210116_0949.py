# Generated by Django 3.1.3 on 2021-01-16 06:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20210105_1810'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cluster',
            name='sets',
            field=models.ManyToManyField(related_name='clusters', to='backend.Set'),
        ),
    ]