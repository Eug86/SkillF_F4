from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import generics
from .models import Recipe
from .serializer import RecipeSerializer
from rest_framework.response import Response


class RecipeView(APIView):
    def get(self, request):
        output = [
            {
                "id": output.id,
                "title": output.title,
                "ingredients": output.ingredients,
                "content": output.content,
                "category": output.category,
            } for output in Recipe.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)


class RecipesDetail(generics.RetrieveAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
