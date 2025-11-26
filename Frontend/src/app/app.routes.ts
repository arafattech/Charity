import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GetInvolvedComponent } from './pages/get-involved/get-involved.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'get-involved', component: GetInvolvedComponent },
  { path: '**', redirectTo: '' }
];



