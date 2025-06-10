import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  styleUrls: ['./landing-page.scss'],
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    
  <main class="landing-container">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-title-animated">
          <h1>Bienvenido a PySoftware</h1>
          <span class="pulse-circle"></span>
        </div>
        <p>Soluciones tecnológicas innovadoras para tu negocio</p>
        <div class="hero-buttons">
          <a routerLink="/auth/register" class="btn btn-primary">Comenzar</a>
          <a routerLink="/about" class="btn btn-secondary">Conoce más</a>
        </div>
      </div>
    </section>

      <!-- Features Section -->
      <section class="features-section">
        <div class="section-container">
          <h2>Nuestros Servicios</h2>
          <div class="features-grid">
            <div class="feature-card">
              <h3>Desarrollo Web</h3>
              <p>Creamos soluciones web modernas y escalables</p>
            </div>
            <div class="feature-card">
              <h3>Aplicaciones Móviles</h3>
              <p>Desarrollo de apps nativas y multiplataforma</p>
            </div>
            <div class="feature-card">
              <h3>Consultoría IT</h3>
              <p>Asesoramiento experto en tecnología</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-main">
          <div class="footer-brand">
            <h3>PySoftware</h3>
            <p>Transformando ideas en soluciones digitales innovadoras para empresas que buscan destacar en la era digital.</p>
            <div class="social-links">
              <a href="#" aria-label="LinkedIn">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="#" aria-label="GitHub">
                <i class="fab fa-github"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div class="footer-links-section">
            <div class="footer-links-column">
              <h4>Empresa</h4>
              <nav>
                <a routerLink="/about">Sobre Nosotros</a>
                <a routerLink="/services">Servicios</a>
                <a routerLink="/contact">Contacto</a>
                <a routerLink="/careers">Carreras</a>
              </nav>
            </div>
            <div class="footer-links-column">
              <h4>Servicios</h4>
              <nav>
                <a routerLink="/services">Desarrollo Web</a>
                <a routerLink="/services">Apps Móviles</a>
                <a routerLink="/services">Consultoría IT</a>
                <a routerLink="/services">Cloud Solutions</a>
              </nav>
            </div>
            <div class="footer-links-column">
              <h4>Soporte</h4>
              <nav>
                <a routerLink="/help">Centro de Ayuda</a>
                <a routerLink="/docs">Documentación</a>
                <a routerLink="/status">Estado del Sistema</a>
                <a routerLink="/api">API</a>
              </nav>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p>&copy; 2024 PySoftware. Todos los derechos reservados.</p>
            <nav class="footer-legal">
              <a routerLink="/privacy">Privacidad</a>
              <a routerLink="/terms">Términos</a>
              <a routerLink="/cookies">Cookies</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class LandingPage {}
