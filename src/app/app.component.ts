import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { HomeComponent } from './components/pages/home/home.component';
import { FilmesComponent } from './components/pages/filmes/filmes.component';
import { NavesComponent } from './components/pages/naves/naves.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    HomeComponent,
    FilmesComponent,
    NavesComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SWAPI - 7 Days of Code - Angular';

}
