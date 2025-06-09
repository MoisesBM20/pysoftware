import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="auth-container">
      <div class="auth-card">
        <h2>Iniciar Sesión</h2>
        <form class="auth-form">
          <div class="form-group">
            <label for="email">Correo Electrónico</label>
            <input type="email" id="email" placeholder="tu@email.com">
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input type="password" id="password" placeholder="••••••••">
          </div>
          <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </form>
        <div class="auth-links">
          <a routerLink="/auth/register">¿No tienes cuenta? Regístrate</a>
          <a href="#">¿Olvidaste tu contraseña?</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .auth-container {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--gradient-start), var(--gradient-end));
      padding: 2rem;
    }

    .auth-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: var(--card-shadow);
      width: 100%;
      max-width: 400px;
    }

    .auth-card h2 {
      text-align: center;
      color: var(--primary-color);
      margin-bottom: 2rem;
      font-size: 2rem;
    }

    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-weight: 500;
      color: var(--text-color);
    }

    .form-group input {
      padding: 0.75rem;
      border: 1px solid var(--light-background);
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    .form-group input:focus {
      outline: none;
      border-color: var(--primary-color);
    }

    .auth-form button {
      margin-top: 1rem;
      width: 100%;
    }

    .auth-links {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .auth-links a {
      color: var(--primary-color);
      text-decoration: none;
      font-size: 0.875rem;
      transition: color 0.3s ease;
    }

    .auth-links a:hover {
      color: var(--secondary-color);
    }
  `]
})
export class LoginComponent {}
