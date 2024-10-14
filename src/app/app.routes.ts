import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { NaveComponent } from './componentes/nave/nave.component';

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
    path: 'nave',
    component: NaveComponent
  }
];
