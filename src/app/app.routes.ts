import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CamerasComponent } from './cameras/cameras.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'capture',
    component: CamerasComponent
  }
];
