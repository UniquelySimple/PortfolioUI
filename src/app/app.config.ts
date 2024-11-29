import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { provideCacheableAnimationLoader, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    // provideLottieOptions({ player: () => player }),
    // provideCacheableAnimationLoader(),
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
};