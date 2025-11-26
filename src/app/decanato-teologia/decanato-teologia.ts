import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Servicio {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-decanato-teologia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decanato-teologia.html',
  styleUrl: './decanato-teologia.css',
})
export class DecanatoTeologia implements OnInit {
  
  servicios: Servicio[] = [];

  ngOnInit(): void {
    this.servicios = [
      {
        nombre: 'Matrícula en Línea',
        descripcion: 'Gestión completa de inscripción y reinscripción a programas de Teología.',
      },
      {
        nombre: 'Asesoría Pastoral',
        descripcion: 'Orientación académica y espiritual personalizada para estudiantes y docentes.',
      },
      {
        nombre: 'Biblioteca Teológica',
        descripcion: 'Acceso digital a colecciones especializadas en estudios bíblicos y religión.',
      },
      {
        nombre: 'Investigación Bíblica',
        descripcion: 'Apoyo a proyectos de investigación sobre textos antiguos y exégesis.',
      },
      {
        nombre: 'Prácticas de Campo',
        descripcion: 'Coordinación de pasantías en iglesias, ONGs y centros de misión.',
      },
      {
        nombre: 'Recursos Litúrgicos',
        descripcion: 'Material de apoyo para eventos, ceremonias y organización de cultos.',
      }
    ];
  }
}