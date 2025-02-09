import { Routes } from '@angular/router';
import { HomeComponent } from './public/pages/home/home.component';
import { LoginComponent } from './public/pages/login/login.component';
import {NotFoundComponent} from './public/pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' }
];
