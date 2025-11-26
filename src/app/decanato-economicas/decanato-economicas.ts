import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Servicio {
  nombre: string;
  descripcion: string;
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
      },
      {
        nombre: 'Laboratorio de Finanzas',
        descripcion: 'Simulación de mercados y trading en tiempo real para prácticas estudiantiles.',
      },
      {
        nombre: 'Gestión Contable',
        descripcion: 'Soporte y formación en normativas contables NIIF y auditoría financiera.',
      },
      {
        nombre: 'Laboratorio de Desarrollo Web',
        descripcion: 'Acceso a entornos virtuales para el desarrollo de aplicaciones web y móvil.',
      },
      {
        nombre: 'Seminarios de Ciberseguridad',
        descripcion: 'Talleres y certificaciones en protección de datos, redes y análisis forense digital.',
      },
      {
        nombre: 'Investigación Económica',
        descripcion: 'Publicación de estudios sobre tendencias macroeconómicas y desarrollo.',
      }
    ];
  }
}