import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

import { SwapiService } from '../../services/swapi.service';
import { RetornoAPI } from '../retornoAPI/retorno-api';

interface Filme {
  episode_id: number,
  title: string,
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
export class FilmesComponent implements OnInit {

  filmesAPI: RetornoAPI<Filme> = {
    results: []
  };

  constructor(private swapiService: SwapiService<RetornoAPI<Filme>>) {}
  
  ngOnInit(): void {
    this.swapiService.obter('films').subscribe(lista => { this.filmesAPI = lista});
  }
  
  public formatarData(dataFilme: string): String {
    const data = new Date(dataFilme);
    return data.toLocaleDateString('pt-BR');
  }
  
  displayedColumns = ['episodio', 'titulo', 'data_estreia'];
}