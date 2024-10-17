import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { SwapiService } from '../../services/swapi.service';
import { RetornoAPI } from '../retornoAPI/retorno-api';
import { CommonModule } from '@angular/common';

interface Filme {
  episode_id: number,
  title: string,
  release_date: string
}

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressSpinnerModule,
    FormsModule
  ],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.css'
})
export class FilmesComponent implements OnInit {
  exibirSpinner = true;
  
  filmesAPI: RetornoAPI<Filme> = {
    results: []
  };
  
  displayedColumns = ['episodio', 'titulo', 'data_estreia'];

  public termoBusca: string = '';
  
  constructor(private swapiService: SwapiService<RetornoAPI<Filme>>) {}
  
  ngOnInit(): void {
    this.exibirFilmes();
  }
  
  exibirFilmes(): void {
    setTimeout(() => {
      this.swapiService.obter('films', this.termoBusca).subscribe(lista => { this.filmesAPI = lista });
      this.exibirSpinner = false;
    }, 3000);
  } 

  formatarData(dataFilme: string): String {
    const data = new Date(dataFilme);
    return data.toLocaleDateString('pt-BR');
  }
 
}