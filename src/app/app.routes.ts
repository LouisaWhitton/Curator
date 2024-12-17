import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DisplayCollectionComponent } from './collections/display-collection/display-collection.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'display-collection',
    title: 'Display Collection',
    component: DisplayCollectionComponent,
  },
];
