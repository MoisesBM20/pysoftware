import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="catalogo-container">
      <h1 class="catalogo-title">Catálogo de Servicios</h1>
      <div class="catalogo-section">
        <h2>Aplicaciones Móviles</h2>
        <div class="catalogo-grid">
          <div class="catalogo-card">
            <h3>Desarrollo Nativo</h3>
            <p>Apps para iOS y Android con el mejor rendimiento y experiencia de usuario.</p>
          </div>
          <div class="catalogo-card">
            <h3>Apps Híbridas</h3>
            <p>Soluciones multiplataforma usando tecnologías como Ionic y Flutter.</p>
          </div>
        </div>
      </div>
      <div class="catalogo-section">
        <h2>Aplicaciones Web</h2>
        <div class="catalogo-grid">
          <div class="catalogo-card">
            <h3>Web Corporativa</h3>
            <p>Sitios web modernos, responsivos y optimizados para tu empresa.</p>
          </div>
          <div class="catalogo-card">
            <h3>Portales y Plataformas</h3>
            <p>Desarrollo de portales, intranets y sistemas de gestión personalizados.</p>
          </div>
        </div>
      </div>
      <div class="catalogo-section">
        <h2>Consultoría y Otros Servicios</h2>
        <div class="catalogo-grid">
          <div class="catalogo-card">
            <h3>Consultoría IT</h3>
            <p>Asesoría experta para transformar digitalmente tu negocio.</p>
          </div>
          <div class="catalogo-card">
            <h3>Cloud Solutions</h3>
            <p>Implementación y migración de soluciones en la nube.</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .catalogo-container {
      max-width: 1100px;
      margin: 0 auto 2rem auto;
      padding: 2rem;
      padding-top: 110px; /* Ajusta según la altura real de tu navbar */
      background: #fff;
      border-radius: 18px;
      box-shadow: 0 4px 24px rgba(66,133,244,0.08);
    }
    .catalogo-title {
      position: sticky;
      top: 80px; /* igual a la altura del navbar */
      background: #fff;
      z-index: 10;
      text-align: center;
      font-size: 2.5rem;
      color: var(--primary-color, #7c3aed);
      margin-bottom: 2.5rem;
      font-weight: 800;
      border-bottom: 2px solid #ede7f6;
      padding-bottom: 0.5rem;
      padding-top: 0.5rem;
    }
    .catalogo-section {
      margin-bottom: 2.5rem;
    }
    .catalogo-section h2 {
      color: var(--primary-dark, #3949ab);
      font-size: 1.5rem;
      margin-bottom: 1.2rem;
      font-weight: 700;
    }
    .catalogo-grid {
      display: flex;
      gap: 2rem;
      flex-wrap: wrap;
    }
    .catalogo-card {
      flex: 1 1 250px;
      background: #f5f8ff;
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 2px 8px rgba(66,133,244,0.06);
      margin-bottom: 1.5rem;
      min-width: 220px;
      transition: box-shadow 0.2s;
    }
    .catalogo-card:hover {
      box-shadow: 0 6px 24px rgba(66,133,244,0.13);
    }
    .catalogo-card h3 {
      margin-top: 0;
      color: var(--primary-color, #1a237e);
      font-size: 1.15rem;
      font-weight: 600;
    }
    .catalogo-card p {
      color: #444;
      margin-bottom: 0;
    }
    @media (max-width: 900px) {
      .catalogo-grid {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `]
})
export class CatalogoComponent {}