import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

// Definición de la interfaz
interface Servicio {
  nombre: string;
  descripcion: string;
  icon: string;
}

@Component({
  selector: 'app-decanato-humanidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './decanato-humanidades.html',
  styleUrl: './decanato-humanidades.css',
})
export class DecanatoHumanidades implements OnInit {

  servicios: Servicio[] = [];

  ngOnInit(): void {
    this.servicios = [
      {
        nombre: 'Filosofía Aplicada',
        descripcion: 'Talleres y seminarios para aplicar el pensamiento filosófico a problemas contemporáneos.',
        icon: 'fas fa-brain'
      },
      {
        nombre: 'Escritura Creativa',
        descripcion: 'Cursos y tutorías para el desarrollo de habilidades literarias y narrativas.',
        icon: 'fas fa-feather-alt'
      },
      {
        nombre: 'Archivo Histórico Digital',
        descripcion: 'Acceso a colecciones de documentos históricos y registros culturales de la región.',
        icon: 'fas fa-landmark'
      },
      {
        nombre: 'Seminarios de Crítica Cultural',
        descripcion: 'Análisis profundo de tendencias artísticas, sociales y mediáticas actuales.',
        icon: 'fas fa-comments'
      },
      {
        nombre: 'Intercambio Lingüístico',
        descripcion: 'Programas de inmersión y práctica en diferentes idiomas con universidades asociadas.',
        icon: 'fas fa-language'
      },
      {
        nombre: 'Investigación Social y Ética',
        descripcion: 'Apoyo a proyectos que aborden temas de justicia social, derechos humanos y ética profesional.',
        icon: 'fas fa-hands-wash'
      }
    ];
  }
}