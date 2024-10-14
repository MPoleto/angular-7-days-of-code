import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';

import { HomeComponent } from './componentes/home/home.component';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { NaveComponent } from './componentes/nave/nave.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    HomeComponent,
    FilmesComponent,
    NaveComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '7 Days of Code';
}
