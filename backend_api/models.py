from django.db import models


class Recipe(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100, unique=True)
    ingredients = models.TextField()
    content = models.TextField()
    category = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.title}'


