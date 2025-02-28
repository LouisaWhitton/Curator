import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CooperHewittComponent } from './collections/cooper-hewitt/cooper-hewitt.component';
import { RijksmuseumComponent } from './collections/rijksmuseum/rijksmuseum.component';
import { MyCollectionComponent } from './collections/my-collection/my-collection.component';
import { ArticComponent } from './collections/artic/artic.component';

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
  {
    path: 'rijksmuseum',
    title: 'Rijksmuseum',
    component: RijksmuseumComponent,
  },
  {
    path: 'artic',
    title: 'Art Institue of Chicago',
    component: ArticComponent,
  },
  {
    path: 'my-collection',
    title: 'My Collection',
    component: MyCollectionComponent,
  },
];
