// import { Routes } from '@angular/router';

// export const routes: Routes = [];
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { CarList } from './components/car-list/car-list';
import { CarDetails } from './components/car-details/car-details';
import { Booking } from './components/booking/booking';
import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { About } from './components/about/about';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cars', component: CarList },
  { path: 'cars/:id', component: CarDetails },
  { path: 'booking/:id', component: Booking },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' }
];
