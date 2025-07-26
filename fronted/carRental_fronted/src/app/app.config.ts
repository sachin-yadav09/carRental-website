import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};
// import { provideRouter } from '@angular/router';
// import { Home } from './components/home/home';
// import { CarList } from './components/car-list/car-list';
// import { CarDetails } from './components/car-details/car-details';
// import { Booking } from './components/booking/booking';
// import { Login } from './components/login/login';
// import { Signup } from './components/signup/signup';

// export const appConfig = {
//   providers: [
//     provideRouter([
//       { path: '', component: Home },
//       { path: 'cars', component: CarList },
//       { path: 'cars/:id', component: CarDetails },
//       { path: 'booking/:id', component: Booking },
//       { path: 'login', component: Login },
//       { path: 'signup', component: Signup },
//     ])
//   ]
// };