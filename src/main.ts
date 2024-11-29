import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppRoutingModule, routes } from './app/app.routes';
import { provideRouter, RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Use provideRouter instead of registering RouterModule,
    provideHttpClient() // Provide HttpClient
  ]
}).catch(err => console.error(err));
