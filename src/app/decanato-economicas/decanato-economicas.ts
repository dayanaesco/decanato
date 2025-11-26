import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Definición de una interfaz simple para la estructura de datos
interface Servicio {
  nombre: string;
  descripcion: string;
  icon: string;
}

@Component({
  selector: 'app-decanato-economicas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decanato-economicas.html',
  styleUrl: './decanato-economicas.css',
})
export class DecanatoEconomicas implements OnInit {

  servicios: Servicio[] = [];

  ngOnInit(): void {
    this.servicios = [
      {
        nombre: 'Consultoría Empresarial',
        descripcion: 'Servicios de asesoría financiera y administrativa',
        icon: 'fas fa-chart-line'
      },
      {
        nombre: 'Laboratorio de Finanzas',
        descripcion: 'Simulación de mercados y trading en tiempo real para prácticas estudiantiles.',
        icon: 'fas fa-chart-bar'
      },
      {
        nombre: 'Gestión Contable',
        descripcion: 'Soporte y formación en normativas contables NIIF y auditoría financiera.',
        icon: 'fas fa-calculator'
      },
      {
        nombre: 'Bolsa de Empleo',
        descripcion: 'Conexión directa con empresas e instituciones financieras para pasantías y empleos.',
        icon: 'fas fa-briefcase'
      },
      {
        nombre: 'Programas Ejecutivos',
        descripcion: 'Diplomados y cursos de alta dirección para profesionales en activo.',
        icon: 'fas fa-lightbulb'
      },
      {
        nombre: 'Investigación Económica',
        descripcion: 'Publicación de estudios sobre tendencias macroeconómicas y desarrollo regional.',
        icon: 'fas fa-search-dollar'
      }
    ];
  }
}