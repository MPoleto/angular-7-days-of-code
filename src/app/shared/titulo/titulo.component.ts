import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.css'
})
export class TituloComponent {
  @Input() iconeSrc: string = ''; 
  @Input() iconeAlt: string = ''; 
  @Input() titulo: string = ''; 
}
