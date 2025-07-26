import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './car-list.html',
  styleUrl: './car-list.css'
})
export class CarList {
 cars = [
    {
      id: 1,
      name: 'Brezza',
      description: 'Comfortable and reliable sedan',
      image: '/assets/brezza_car.jpg'
    },
    {
      id: 2,
      name: 'HYUNDAI Aura',
      description: 'Sporty coupe for thrill seekers',
      image: '/assets/hhyundai_aura.webp'
    },
    {
      id: 3,
      name: 'Swift Dezire',
      description: 'Spacious SUV for family trips',
      image: '/assets/swift_dezire.jpg'
    },
    {
      id: 4,
      name: 'Mahindra Thar',
      description: 'Spacious SUV for family trips',
      image: '/assets/Mahindra_Thar.jpg'
    },
    {
      id: 5,
      name: 'Swift',
      description: 'Spacious SUV for family trips',
      image: '/assets/swift.png'
    },
    {
      id: 6,
      name: 'Hyundai Exter',
      description: 'Spacious SUV for family trips',
      image: '/assets/hyundai_exter.webp'
    }
    ,
    {
      id: 7,
      name: 'Hyundai Creta',
      description: 'Powerful car family trips',
      image: '/assets/Hyundai-Creta.webp'
    },
    {
      id: 8,
      name: 'Hyundai Verna',
      description: 'Family car',
      image: '/assets/hyundai_verna.webp'
    }
  ];
}

