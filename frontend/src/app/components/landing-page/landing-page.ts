import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    
    <main class="landing-container">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <h1>Bienvenido a PySoftware</h1>
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
  styles: [`
    .landing-container {
      padding-top: 64px;
      min-height: calc(100vh - 64px);
      display: flex;
      flex-direction: column;
    }

    .hero-section {
      background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
      padding: 4rem 2rem;
      text-align: center;
      min-height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-content h1 {
      font-size: 3rem;
      color: var(--text-color);
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .hero-content p {
      font-size: 1.25rem;
      color: var(--text-light);
      margin-bottom: 2rem;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .features-section {
      padding: 4rem 2rem;
      background-color: var(--white);
      flex-grow: 1;
    }

    .section-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .features-section h2 {
      text-align: center;
      color: var(--text-color);
      font-size: 2rem;
      margin-bottom: 3rem;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 0 1rem;
    }

    .feature-card {
      background-color: var(--background-color);
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid var(--light-background);
    }

    .feature-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--card-shadow);
    }

    .feature-card h3 {
      color: var(--secondary-color);
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }

    .feature-card p {
      color: var(--text-light);
    }

    /* Footer Styles */
    .footer {
      background-color: var(--footer-background);
      color: var(--footer-text);
      padding-top: 4rem;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    .footer-main {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 4rem;
      margin-bottom: 4rem;
    }

    .footer-brand {
      max-width: 400px;
    }

    .footer-brand h3 {
      color: var(--white);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .footer-brand p {
      color: var(--footer-text);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .social-links {
      display: flex;
      gap: 1rem;
    }

    .social-links a {
      color: var(--footer-text);
      font-size: 1.5rem;
      transition: color 0.3s ease;
    }

    .social-links a:hover {
      color: var(--secondary-color);
    }

    .footer-links-section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .footer-links-column h4 {
      color: var(--white);
      font-size: 1.1rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    .footer-links-column nav {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .footer-links-column a {
      color: var(--footer-text);
      text-decoration: none;
      transition: all 0.3s ease;
      font-size: 0.95rem;
    }

    .footer-links-column a:hover {
      color: var(--white);
      transform: translateX(5px);
    }

    .footer-bottom {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      padding: 2rem 0;
      margin-top: 2rem;
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .footer-bottom p {
      color: var(--footer-text);
      font-size: 0.9rem;
    }

    .footer-legal {
      display: flex;
      gap: 2rem;
    }

    .footer-legal a {
      color: var(--footer-text);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.3s ease;
    }

    .footer-legal a:hover {
      color: var(--white);
    }

    @media (max-width: 1024px) {
      .footer-main {
        grid-template-columns: 1fr;
        gap: 3rem;
      }

      .footer-brand {
        max-width: 100%;
        text-align: center;
      }

      .social-links {
        justify-content: center;
      }
    }

    @media (max-width: 768px) {
      .footer-links-section {
        grid-template-columns: repeat(2, 1fr);
      }

      .footer-bottom-content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }

      .footer-legal {
        justify-content: center;
      }

      .hero-content h1 {
        font-size: 2rem;
      }

      .hero-content p {
        font-size: 1rem;
      }

      .features-section {
        padding: 3rem 1rem;
      }
    }

    @media (max-width: 480px) {
      .footer-links-section {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .footer-links-column nav {
        align-items: center;
      }
    }
  `]
})
export class LandingPage {}
