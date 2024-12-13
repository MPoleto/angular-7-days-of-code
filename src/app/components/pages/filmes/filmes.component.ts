import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { SwapiService } from '../../../services/swapi.service';
import { RetornoAPI } from '../../../shared/retornoAPI/retorno-api';
import { HeaderComponent } from '../../../shared/header/header.component';
import { TituloComponent } from '../../../shared/titulo/titulo.component';

interface Filme {
  title: string;
  episode_id: number;
  release_date: string;
  planets: string[];
  species: string[];
  vehicles: string[];
}

@Component({
  selector: 'app-filmes',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    HeaderComponent,
    TituloComponent
  ],
  templateUrl: './filmes.component.html',
  styleUrl: './filmes.component.css'
})
export class FilmesComponent implements OnInit {
  exibirSpinner = true;
  
  filmesAPI: RetornoAPI<Filme> = {
    count: 0,
    next: null,
    previous: null,
    results: []
  };
  
  colunas: string[] = ['titulo', 'episodio', 'data_estreia', 'planetas', 'especies', 'veiculos'];

  termoBusca: string = '';
  
  constructor(private swapiService: SwapiService<RetornoAPI<Filme>>) {}
  
  ngOnInit(): void {
    this.exibirFilmes();
  }
  
  exibirFilmes(): void {
    this.exibirSpinner = true;
    
    this.swapiService.obter('films', this.termoBusca).subscribe(lista => { 
      this.filmesAPI = lista 
      this.exibirSpinner = false;
    });
  } 

  formatarData(dataFilme: string): String {
    const data = new Date(dataFilme);
    return data.toLocaleDateString('pt-BR');
  }

  formatarLink(link: string): String {
    let substringInicio = link.lastIndexOf('api/') + 4;
    return link.slice(substringInicio, -1);
  }
 
}