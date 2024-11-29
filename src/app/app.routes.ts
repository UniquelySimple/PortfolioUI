import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { AboutMeComponent } from './layout/about-me/about-me.component';
import { ContactMeComponent } from './layout/contact-me/contact-me.component';
import { ProjectsComponent } from './layout/projects/projects.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to Home by default
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'contact', component: ContactMeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: '**', redirectTo: '/home' }, // Wildcard route for 404
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}