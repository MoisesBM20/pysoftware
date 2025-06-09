import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="services-container">
      <h1>Nuestros Servicios</h1>
      <p>Página en construcción</p>
    </div>
  `,
  styles: [`
    .services-container {
      padding: 6rem 2rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
      text-align: center;
    }

    h1 {
      color: var(--text-color);
      margin-bottom: 1rem;
    }

    p {
      color: var(--text-light);
    }
  `]
})
export class ServicesComponent {} 