from django.db import models
# Create your models here.
class Car(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='cars/')
    price_per_day = models.DecimalField(max_digits=8, decimal_places=2)
    price_per_hour = models.DecimalField(max_digits=8, decimal_places=2)



class Booking(models.Model):
    car = models.ForeignKey(Car, on_delete=models.CASCADE, related_name='bookings')
    user_name = models.CharField(max_length=100)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    total_price = models.DecimalField(max_digits=10, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user_name} - {self.car.name} from {self.start_date} to {self.end_date}"
