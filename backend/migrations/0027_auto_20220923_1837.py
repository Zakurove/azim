# Generated by Django 3.2 on 2022-09-23 15:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0026_auto_20220922_0004'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cluster',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='cluster',
            name='sets',
        ),
        migrations.DeleteModel(
            name='EmailList',
        ),
        migrations.RemoveField(
            model_name='practicedescinput',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='practicedescinput',
            name='sets',
        ),
        migrations.RemoveField(
            model_name='practicedescsession',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='practicedescsession',
            name='practiceDescInputs',
        ),
        migrations.RemoveField(
            model_name='practicedescsession',
            name='sets',
        ),
        migrations.RemoveField(
            model_name='practiceidentifysession',
            name='images',
        ),
        migrations.RemoveField(
            model_name='practiceidentifysession',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='set',
            name='owner',
        ),
        migrations.RemoveField(
            model_name='setfeature',
            name='set',
        ),
        migrations.RemoveField(
            model_name='setimage',
            name='set',
        ),
        migrations.RemoveField(
            model_name='setnotes',
            name='setImage',
        ),
        migrations.DeleteModel(
            name='Cluster',
        ),
        migrations.DeleteModel(
            name='PracticeDescInput',
        ),
        migrations.DeleteModel(
            name='PracticeDescSession',
        ),
        migrations.DeleteModel(
            name='PracticeIdentifySession',
        ),
        migrations.DeleteModel(
            name='Set',
        ),
        migrations.DeleteModel(
            name='SetFeature',
        ),
        migrations.DeleteModel(
            name='SetImage',
        ),
        migrations.DeleteModel(
            name='SetNotes',
        ),
    ]
