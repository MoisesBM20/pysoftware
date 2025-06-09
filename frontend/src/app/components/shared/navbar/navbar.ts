import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <a routerLink="/" class="navbar-brand">PySoftware</a>
        
        <div class="navbar-menu">
          <a routerLink="/" class="nav-link">Inicio</a>
          <a routerLink="/services" class="nav-link">Servicios</a>
          <a routerLink="/about" class="nav-link">Nosotros</a>
          <a routerLink="/contact" class="nav-link">Contacto</a>
        </div>

        <div class="navbar-auth">
          <a routerLink="/auth/login" class="btn btn-secondary">Iniciar Sesión</a>
          <a routerLink="/auth/register" class="btn btn-primary">Registrarse</a>
        </div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background-color: var(--white);
      box-shadow: var(--card-shadow);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
    }

    .navbar-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .navbar-brand {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--primary-color);
      text-decoration: none;
      transition: color 0.3s ease;
    }

    .navbar-brand:hover {
      color: var(--primary-dark);
    }

    .navbar-menu {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    .nav-link {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    .nav-link:hover {
      color: var(--primary-color);
    }

    .navbar-auth {
      display: flex;
      gap: 1rem;
      align-items: center;
    }

    .navbar-auth .btn {
      padding: 0.5rem 1rem;
    }

    @media (max-width: 768px) {
      .navbar-menu {
        display: none;
      }

      .navbar-auth {
        gap: 0.5rem;
      }

      .navbar-auth .btn {
        padding: 0.4rem 0.8rem;
        font-size: 0.875rem;
      }
    }
  `]
})
export class NavbarComponent {} 