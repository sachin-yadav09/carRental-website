// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { App } from "./app/app";
import { provideHttpClient } from "@angular/common/http";

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));
// import { bootstrapApplication } from '@angular/platform-browser';
// import { App } from './app/app';
// import { appConfig } from './app/app.config';

// bootstrapApplication(App, appConfig).catch(err => console.error(err));
bootstrapApplication(App, {
  providers: [
    provideHttpClient(),  // ✅ REQUIRED FOR HTTP TO WORK
    provideRouter(routes)
  ]
});
