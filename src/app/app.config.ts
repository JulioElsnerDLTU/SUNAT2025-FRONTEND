import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura
      }
    })
  ]
};
