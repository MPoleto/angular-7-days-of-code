import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

import { HomeComponent } from './componentes/home/home.component';
import { FilmesComponent } from './componentes/filmes/filmes.component';
import { NavesComponent } from './componentes/naves/naves.component';

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
  title = '7 Days of Code';

}
