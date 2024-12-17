import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CooperHewittComponent } from './collections/cooper-hewitt/cooper-hewitt.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'cooper-hewitt',
    title: 'Cooper Hewitt',
    component: CooperHewittComponent,
  },
];
