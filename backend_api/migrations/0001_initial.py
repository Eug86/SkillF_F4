# Generated by Django 4.2.1 on 2023-05-16 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100, unique=True)),
                ('ingredients', models.TextField()),
                ('content', models.TextField()),
                ('category', models.CharField(max_length=100)),
            ],
        ),
    ]