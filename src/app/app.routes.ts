import { Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { FilmesComponent } from './components/pages/filmes/filmes.component';
import { NavesComponent } from './components/pages/naves/naves.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'filmes',
    component: FilmesComponent
  },
  {
    path: 'naves',
    component: NavesComponent
  },
  { 
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  }
];
