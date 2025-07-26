// booking.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './booking.html',
  styleUrls: ['./booking.css']
})
export class Booking implements OnInit {
  car: any = {};
  userName: string = '';
  bookingType: string = 'hour';
  quantity: number = 1;
  startDate: string = '';
  endDate: string = '';
  totalPrice: number = 0;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const carId = this.route.snapshot.params['id'];
    this.http.get(`http://127.0.0.1:8000/carRentalapp/cars/${carId}/`).subscribe((data: any) => {
      this.car = data;
      this.calculatePrice();
    });
  }

  calculatePrice() {
    const rate = this.bookingType === 'hour' ? this.car.price_per_hour : this.car.price_per_day;
    this.totalPrice = rate * this.quantity;
  }

  bookNow() {
    const booking = {
      car: this.car.id,
      user_name: this.userName,
      start_date: this.startDate,
      end_date: this.endDate,
      total_price: this.totalPrice
    };

    this.http.post("http://127.0.0.1:8000/carRentalapp/bookings/", booking).subscribe({
      next: () => alert('Booking successful!'),
      error: () => alert('Booking failed!')
    });
  }
}
