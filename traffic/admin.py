from django.contrib import admin

# Register your models here.
from .models import reg

class regAdmin(admin.ModelAdmin):
    list_display = ('username', 'password', 'email')
admin.site.register(reg,regAdmin)
