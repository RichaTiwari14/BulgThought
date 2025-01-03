from rest_framework import serializers
from .models import BulgThoughtRegistration, Contact, PostPoem


class BulgThoughtRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BulgThoughtRegistration
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'


class PostPoemSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostPoem
        fields = '__all__'
