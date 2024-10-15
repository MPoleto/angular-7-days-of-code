import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import films from '../../films.json';

interface Filme {
  episode_id: number
  title: string
  release_date: string
}

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [
    MatIconModule,
    MatTableModule
  ],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.css'
})
export class FilmesComponent {
  filmes: Filme[] = films.results;
  displayedColumns = ['episodio', 'titulo', 'data_estreia'];
}
