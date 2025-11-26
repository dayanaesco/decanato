import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Definición de una interfaz simple para la estructura de datos
interface Servicio {
  nombre: string;
  descripcion: string;
  icon: string;
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
        icon: 'fas fa-graduation-cap'
      },
      {
        nombre: 'Asesoría Pastoral',
        descripcion: 'Orientación académica y espiritual personalizada para estudiantes y docentes.',
        icon: 'fas fa-hands-helping'
      },
      {
        nombre: 'Biblioteca Teológica',
        descripcion: 'Acceso digital a colecciones especializadas en estudios bíblicos y religión.',
        icon: 'fas fa-book-reader'
      },
      {
        nombre: 'Investigación Bíblica',
        descripcion: 'Apoyo a proyectos de investigación sobre textos antiguos y exégesis.',
        icon: 'fas fa-microscope'
      },
      {
        nombre: 'Prácticas de Campo',
        descripcion: 'Coordinación de pasantías en iglesias, ONGs y centros de misión.',
        icon: 'fas fa-church'
      },
      {
        nombre: 'Recursos Litúrgicos',
        descripcion: 'Material de apoyo para eventos, ceremonias y organización de cultos.',
        icon: 'fas fa-cross'
      }
    ];
  }
}