import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="about-container">
      <h1>Sobre Nosotros</h1>
      <p>Página en construcción</p>
    </div>
  `,
  styles: [`
    .about-container {
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
export class AboutComponent {} 