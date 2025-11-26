import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Servicio {
  nombre: string;
  descripcion: string;
  icon: string;
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
        icon: 'fas fa-gavel'
      },
      {
        nombre: 'Consultoría Penal',
        descripcion: 'Orientación en procedimientos y defensa en el área de derecho penal y criminalística.',
        icon: 'fas fa-balance-scale'
      },
      {
        nombre: 'Mediación y Arbitraje',
        descripcion: 'Servicios de resolución alternativa de conflictos para empresas y particulares.',
        icon: 'fas fa-handshake'
      },
      {
        nombre: 'Cátedras de Derecho Constitucional',
        descripcion: 'Programas de profundización en la Carta Magna y los derechos fundamentales.',
        icon: 'fas fa-book'
      },
      {
        nombre: 'Simulacros de Juicio',
        descripcion: 'Prácticas de litigación en sala de juicios simulada para desarrollar habilidades de argumentación.',
        icon: 'fas fa-users'
      },
      {
        nombre: 'Publicaciones Legales',
        descripcion: 'Acceso a la Revista de Ciencias Jurídicas con artículos de investigación especializada.',
        icon: 'fas fa-scroll'
      }
    ];
  }
}