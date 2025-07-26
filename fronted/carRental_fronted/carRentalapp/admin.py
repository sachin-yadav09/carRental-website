from django.contrib import admin

# Register your models here.
from django.contrib import admin
from .models import Car, Booking
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin

# Car model register
@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ['name', 'price_per_day', 'price_per_hour']
    search_fields = ['name']
    list_filter = ['price_per_day']

# Booking model register
@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ['user_name', 'car', 'start_date', 'end_date', 'total_price', 'created_at']
    search_fields = ['user_name', 'car__name']
    list_filter = ['start_date', 'end_date']

# Optional: Customize User model display
admin.site.unregister(User)  # unregister default
@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = ['username', 'email', 'is_staff', 'is_active']
    search_fields = ['username', 'email']
    list_filter = ['is_staff', 'is_superuser', 'is_active']
