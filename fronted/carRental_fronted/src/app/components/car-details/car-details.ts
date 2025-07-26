import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-details',
  imports: [RouterModule, CommonModule],
  templateUrl: './car-details.html',
  styleUrl: './car-details.css'
})
export class CarDetails {
carId: number = 0;

  car = {
    id: 0,
    name: '',
    description: '',
    image: '',
    pricePerHour: 200,
    pricePerDay: 1500
  };

  constructor(private route: ActivatedRoute) {
    this.carId = Number(this.route.snapshot.paramMap.get('id'));

    // Dummy data for UI only
    const carData: any = {
      1: {
        id: 1,
        name: 'Brezza',
        description: 'Reliable and fuel-efficient.',
        image: '/assets/brezza_car.jpg',
        pricePerHour: 250,
        pricePerDay: 2000
      },
      2: {
        id: 2,
        name: 'Hyundai Aura',
        description: 'Powerful muscle car.',
        image: '/assets/hhyundai_aura.webp',
        pricePerHour: 200,
        pricePerDay: 1500
      },
      3: {
        id: 3,
        name: 'Swift Dezire',
        description: 'Powerful muscle car.',
        image: '/assets/swift_dezire.jpg',
        pricePerHour: 250,
        pricePerDay: 1800
      },
      4: {
        id: 4,
        name: 'Mahindra Thar',
        description: 'Powerful muscle car.',
        image: '/assets/Mahindra_Thar.jpg',
        pricePerHour: 450,
        pricePerDay: 4200
      },
      5: {
        id: 5,
        name: 'Swift',
        description: 'comfortable drive.',
        image: '/assets/swift.png',
        pricePerHour: 200,
        pricePerDay: 1600
      },
      6: {
        id: 6,
        name: 'Hyundai Exter',
        description: 'Most reliable car.',
        image: '/assets/hyundai_exter.webp',
        pricePerHour: 250,
        pricePerDay: 1800
      },
      7: {
        id: 7,
        name: 'Hyundai Creta',
        description: 'Powerful car.',
        image: '/assets/Hyundai-Creta.webp',
        pricePerHour: 350,
        pricePerDay: 3200
      },
      8: {
        id: 8,
        name: 'Hyundai Verna',
        description: 'Family car.',
        image: '/assets/hyundai_verna.webp',
        pricePerHour: 270,
        pricePerDay: 2100
      }
    };

    if (carData[this.carId]) {
      this.car = carData[this.carId];
    }
  }
}
