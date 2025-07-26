from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CarViewSet, BookingViewSet, login_user, signup_user

router = DefaultRouter()
router.register('cars', CarViewSet)
router.register('bookings', BookingViewSet)



urlpatterns = [
    path('', include(router.urls)),
    path('signup/', signup_user),
    path('login/', login_user),
]