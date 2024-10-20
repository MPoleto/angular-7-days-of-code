import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RetornoAPI } from '../../../shared/retornoAPI/retorno-api';
import { SwapiService } from '../../../services/swapi.service';

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
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './naves.component.html',
  styleUrl: './naves.component.css'
})
export class NavesComponent implements OnInit {
  // colunas: string[] = ['nome', 'modelo', 'fabricante', 'custo', 'comprimento', 'velocidade', 'tripulacao', 'passageiros', 'capacidade', 'consumiveis', 'classificacao_hiperdrive', 'MGLT', 'classe_nave', 'pilotos', 'filmes'];
  colunas: string[] = ['name', 'model', 'manufacturer'];
  colunasCompletas: string[] = [...this.colunas, 'expandir'];
  naveCompleta: Nave | null;
  
  navesAPI: RetornoAPI<Nave> = {
    count: 0,
    next: '',
    previous: '',
    results:[]
  };
  
  exibirSpinner = true;
  termoBusca: string = '';
  totalDeNaves: number = 0;
  paginaIndex: number = 0;

  constructor(private swapiService: SwapiService<RetornoAPI<Nave>>) { }

  ngOnInit(): void {
    this.exibirNaves();
  }

  exibirNaves(): void {
    this.exibirSpinner = true;
    let path: string = 'starships';

    if (this.termoBusca === '') {
      path = `starships/?page=${this.paginaIndex + 1}`;
    }

    this.swapiService.obter(path, this.termoBusca).subscribe(lista => { 
      this.navesAPI = lista;
      this.totalDeNaves = this.navesAPI.count;
      this.exibirSpinner = false;
      
      console.log(`Total de naves: ${this.totalDeNaves}`);
      console.log(`Total de naves sendo exibidas: ${this.navesAPI.results.length}`);
    });
  }
  
  mudarPagina(e: PageEvent) {
    this.paginaIndex = e.pageIndex;
    this.exibirNaves();
  }
  
}
