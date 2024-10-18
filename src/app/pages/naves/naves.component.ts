import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { RetornoAPI } from '../retornoAPI/retorno-api';
import { SwapiService } from '../../services/swapi.service';

interface Nave {
  name:                   string;
  model:                  string;
  manufacturer:           string;
  cost_in_credits:        string;
  length:                 string;
  max_atmosphering_speed: string;
  crew:                   string;
  passengers:             string;
  cargo_capacity:         string;
  consumables:            string;
  hyperdrive_rating:      string;
  MGLT:                   string;
  starship_class:         string;
  pilots:                 string[];
  films:                  string[];
  created:                Date;
  edited:                 Date;
  url:                    string;
}

@Component({
  selector: 'app-nave',
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
  templateUrl: './naves.component.html',
  styleUrl: './naves.component.css'
})
export class NavesComponent implements OnInit {
  exibirSpinner = true;

  navesAPI: RetornoAPI<Nave> = {
    results:[]
  };

  displayedColumns: string[] = ['nome', 'modelo', 'fabricante', 'custo', 'comprimento', 'velocidade', 'tripulacao', 'passageiros', 'capacidade', 'consumiveis', 'classificacao_hiperdrive', 'MGLT', 'classe_nave', 'pilotos', 'filmes']

  termoBusca: string = '';

  constructor(private swapiService: SwapiService<RetornoAPI<Nave>>) { }

  ngOnInit(): void {
    this.exibirNaves();
  }

  exibirNaves(): void {
    this.exibirSpinner = true;

    this.swapiService.obter('starships', this.termoBusca).subscribe(lista => { 
      this.navesAPI = lista 
      this.exibirSpinner = false;
    });

  }
}
