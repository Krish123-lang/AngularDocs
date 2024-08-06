import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StudentService } from './service/student.service';

export const appConfig: ApplicationConfig = {
  // App level services
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), StudentService]
};
