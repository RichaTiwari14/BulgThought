from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import BulgThoughtRegistration, Contact, PostPoem
from .serializers import (
    BulgThoughtRegistrationSerializer,
    ContactSerializer,
    PostPoemSerializer,
)


# API for BulgThoughtRegistration
class BulgThoughtRegistrationAPI(APIView):
    def get(self, request):
        registrations = BulgThoughtRegistration.objects.all()
        serializer = BulgThoughtRegistrationSerializer(registrations, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = BulgThoughtRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# API for Contact
class ContactAPI(APIView):
    def get(self, request):
        contacts = Contact.objects.all()
        serializer = ContactSerializer(contacts, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# API for PostPoem
class PostPoemAPI(APIView):
    def get(self, request):
        poems = PostPoem.objects.all()
        serializer = PostPoemSerializer(poems, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PostPoemSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
