from rest_framework import serializers
from .models import reg
from django.contrib.auth.models import User


class RegSerializer(serializers.ModelSerializer):
    class Meta:
        model = reg
        fields = ('id', 'saving_name', 'date', 'redu_percent')


# class CreateUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'saving_name', 'date', 'redu_percent')
#         extra_kwargs = {'password': {'write_only': True}}

#     def create(self, validated_data):
#         user = User.objects.create_user(validated_data['saving_name'],
#                                         None,
#                                         validated_data['password'])
#         return user


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'saving_name')
