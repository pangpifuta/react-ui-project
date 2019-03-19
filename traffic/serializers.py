from rest_framework import serializers
from .models import reg
from django.contrib.auth.models import User


class RegSerializer(serializers.ModelSerializer):
    class Meta:
        model = reg
        fields = ('id', 'username', 'password', 'email')

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        None,
                                        validated_data['password'])
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')