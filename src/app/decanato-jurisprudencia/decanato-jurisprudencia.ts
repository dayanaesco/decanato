import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Servicio {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-decanato-jurisprudencia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decanato-jurisprudencia.html',
  styleUrl: './decanato-jurisprudencia.css',
})
export class DecanatoJurisprudencia implements OnInit {

  servicios: Servicio[] = [];

  ngOnInit(): void {
    this.servicios = [
      {
        nombre: 'Bufete Jurídico Gratuito',
        descripcion: 'Asesoría legal sin costo para personas de escasos recursos en casos civiles y familiares.',
      },
      {
        nombre: 'Consultoría Penal',
        descripcion: 'Orientación en procedimientos y defensa en el área de derecho penal y criminalística.',
      },
      {
        nombre: 'Mediación y Arbitraje',
        descripcion: 'Servicios de resolución alternativa de conflictos para empresas y particulares.',
      },
      {
        nombre: 'Cátedras de Derecho Constitucional',
        descripcion: 'Programas de profundización en la Carta Magna y los derechos fundamentales.',
      },
      {
        nombre: 'Simulacros de Juicio',
        descripcion: 'Prácticas de litigación en sala de juicios simulada para desarrollar habilidades de argumentación.',
      },
      {
        nombre: 'Publicaciones Legales',
        descripcion: 'Acceso a la Revista de Ciencias Jurídicas con artículos de investigación especializada.',
      }
    ];
  }
}