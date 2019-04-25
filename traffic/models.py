from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class reg(models.Model):
    #username = models.CharField(max_length=20)
    #password = models.CharField(max_length=20)
    #email = models.EmailField()
    saving_name = models.CharField(max_length=20)
    date = models.DateField()
    redu_percent = models.IntegerField()

    def _str_(self):
        return self.saving_name
