// src/app/app.config.ts
import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    // This removes the need for zone.js, reducing bundle size significantly
    provideExperimentalZonelessChangeDetection() 
  ]
};