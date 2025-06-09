import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar-overlay" [class.active]="isOpen" (click)="toggleSidebar()"></div>
    <aside class="sidebar" [class.open]="isOpen">
      <div class="sidebar-header">
        <div class="logo">
          <span class="logo-icon">🚀</span>
          <span class="logo-text">PySoftware</span>
        </div>
        <button class="close-btn" (click)="toggleSidebar()">×</button>
      </div>

      <div class="user-profile">
        <div class="profile-image">
          <span class="profile-placeholder">👤</span>
        </div>
        <div class="profile-info">
          <h3>Bienvenido</h3>
          <p>Invitado</p>
        </div>
      </div>

      <nav class="sidebar-nav">
        <div class="nav-section">
          <h4>Menú Principal</h4>
          <a href="#" class="nav-item">
            <span class="nav-icon">🏠</span>
            <span>Inicio</span>
          </a>
          <a href="#services" class="nav-item">
            <span class="nav-icon">💼</span>
            <span>Servicios</span>
          </a>
          <a href="#" class="nav-item">
            <span class="nav-icon">📱</span>
            <span>Productos</span>
          </a>
          <a href="#" class="nav-item">
            <span class="nav-icon">📈</span>
            <span>Portafolio</span>
          </a>
        </div>

        <div class="nav-section">
          <h4>Recursos</h4>
          <a href="#" class="nav-item">
            <span class="nav-icon">📚</span>
            <span>Blog</span>
          </a>
          <a href="#" class="nav-item">
            <span class="nav-icon">📝</span>
            <span>Documentación</span>
          </a>
          <a href="#" class="nav-item">
            <span class="nav-icon">❓</span>
            <span>FAQ</span>
          </a>
        </div>

        <div class="nav-section">
          <h4>Soporte</h4>
          <a href="#contact" class="nav-item">
            <span class="nav-icon">📞</span>
            <span>Contacto</span>
          </a>
          <a href="#" class="nav-item">
            <span class="nav-icon">💬</span>
            <span>Chat en vivo</span>
          </a>
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="social-links">
          <a href="#" class="social-icon" aria-label="LinkedIn">
            <span>in</span>
          </a>
          <a href="#" class="social-icon" aria-label="Twitter">
            <span>𝕏</span>
          </a>
          <a href="#" class="social-icon" aria-label="GitHub">
            <span>gh</span>
          </a>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    .sidebar-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      z-index: 998;
    }

    .sidebar-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    .sidebar {
      position: fixed;
      top: 0;
      left: -300px;
      width: 300px;
      height: 100%;
      background: white;
      box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      z-index: 999;
      display: flex;
      flex-direction: column;
    }

    .sidebar.open {
      left: 0;
    }

    .sidebar-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem;
      border-bottom: 1px solid var(--light-background);
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--primary-color);
    }

    .logo-icon {
      font-size: 1.5rem;
    }

    .close-btn {
      background: none;
      border: none;
      font-size: 2rem;
      color: var(--text-color);
      cursor: pointer;
      padding: 0.5rem;
      line-height: 1;
    }

    .user-profile {
      padding: 1.5rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      border-bottom: 1px solid var(--light-background);
    }

    .profile-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--light-background);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }

    .profile-info h3 {
      font-size: 1rem;
      margin-bottom: 0.25rem;
    }

    .profile-info p {
      font-size: 0.875rem;
      color: var(--light-text);
    }

    .sidebar-nav {
      flex: 1;
      padding: 1.5rem;
      overflow-y: auto;
    }

    .nav-section {
      margin-bottom: 2rem;
    }

    .nav-section h4 {
      font-size: 0.875rem;
      text-transform: uppercase;
      color: var(--light-text);
      margin-bottom: 1rem;
    }

    .nav-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 0.75rem;
      color: var(--text-color);
      text-decoration: none;
      border-radius: 8px;
      transition: all 0.2s ease;
    }

    .nav-item:hover {
      background: var(--light-background);
      color: var(--primary-color);
    }

    .nav-icon {
      font-size: 1.25rem;
    }

    .sidebar-footer {
      padding: 1.5rem;
      border-top: 1px solid var(--light-background);
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .social-icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--light-background);
      color: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      transition: all 0.2s ease;
      font-size: 0.875rem;
      font-weight: 600;
    }

    .social-icon:hover {
      background: var(--primary-color);
      color: white;
    }
  `]
})
export class Sidebar {
  @Input() isOpen: boolean = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
} 