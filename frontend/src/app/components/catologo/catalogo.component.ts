import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shared/navbar/navbar';

interface Servicio {
  nombre: string;
  descripcion: string;
}

interface Categoria {
  nombre: string;
  servicios: Servicio[];
  abierta: boolean;
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  template: `
    <app-navbar></app-navbar>
    <div class="catalogo-wiki-container">
      <aside class="catalogo-sidebar">
        <h2>Categorías</h2>
        <ul>
          <li *ngFor="let cat of categorias; let i = index">
            <button class="cat-btn" (click)="toggleCategoria(i)">
              <span [class.open]="cat.abierta">&#9654;</span> {{cat.nombre}}
            </button>
            <ul *ngIf="cat.abierta" class="servicios-list">
              <li *ngFor="let serv of cat.servicios" (click)="seleccionarServicio(cat, serv)" [class.selected]="serv === servicioSeleccionado">
                {{serv.nombre}}
              </li>
            </ul>
          </li>
        </ul>
      </aside>
      <main class="catalogo-main">
        <h1 class="catalogo-title">Catálogo de Servicios</h1>
        <div *ngIf="servicioSeleccionado; else selecciona">
          <h2>{{servicioSeleccionado.nombre}}</h2>
          <p>{{servicioSeleccionado.descripcion}}</p>
        </div>
        <ng-template #selecciona>
          <p class="catalogo-placeholder">Selecciona un servicio del menú lateral para ver su descripción.</p>
        </ng-template>
      </main>
    </div>
  `,
  styles: [`
    .catalogo-wiki-container {
      display: flex;
      max-width: 1200px;
      margin: 6rem auto 2rem auto;
      background: #fff;
      border-radius: 18px;
      box-shadow: 0 4px 24px rgba(66,133,244,0.08);
      min-height: 500px;
    }
    .catalogo-sidebar {
      width: 270px;
      border-right: 1.5px solid #ede7f6;
      padding: 2rem 1.2rem 2rem 2rem;
      background: #fafaff;
      border-radius: 18px 0 0 18px;
    }
    .catalogo-sidebar h2 {
      font-size: 1.2rem;
      color: var(--primary-dark, #3949ab);
      margin-bottom: 1.2rem;
      font-weight: 700;
    }
    .catalogo-sidebar ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .cat-btn {
      background: none;
      border: none;
      font-size: 1rem;
      font-weight: 600;
      color: var(--primary-color, #7c3aed);
      cursor: pointer;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0.4rem 0;
      transition: color 0.2s;
    }
    .cat-btn:hover {
      color: var(--primary-dark, #3949ab);
    }
    .cat-btn span {
      display: inline-block;
      margin-right: 0.5rem;
      transition: transform 0.2s;
    }
    .cat-btn span.open {
      transform: rotate(90deg);
    }
    .servicios-list {
      margin-left: 1.5rem;
      margin-top: 0.2rem;
      margin-bottom: 0.7rem;
    }
    .servicios-list li {
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: 6px;
      color: #333;
      font-size: 0.98rem;
      margin-bottom: 0.1rem;
      transition: background 0.2s, color 0.2s;
    }
    .servicios-list li.selected,
    .servicios-list li:hover {
      background: #ede7f6;
      color: var(--primary-color, #7c3aed);
    }
    .catalogo-main {
      flex: 1;
      padding: 2.5rem 2.5rem 2rem 2.5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-height: 500px;
    }
    .catalogo-title {
      font-size: 2.3rem;
      color: var(--primary-color, #7c3aed);
      font-weight: 800;
      margin-bottom: 2rem;
      text-align: left;
      width: 100%;
    }
    .catalogo-main h2 {
      font-size: 1.5rem;
      color: var(--primary-dark, #3949ab);
      margin-bottom: 0.7rem;
      font-weight: 700;
    }
    .catalogo-main p {
      font-size: 1.08rem;
      color: #444;
      margin-bottom: 0;
    }
    .catalogo-placeholder {
      color: #bbb;
      font-style: italic;
      margin-top: 2rem;
    }
    @media (max-width: 900px) {
      .catalogo-wiki-container {
        flex-direction: column;
      }
      .catalogo-sidebar {
        width: 100%;
        border-radius: 18px 18px 0 0;
        border-right: none;
        border-bottom: 1.5px solid #ede7f6;
      }
      .catalogo-main {
        padding: 1.5rem 1rem 1rem 1rem;
      }
    }
  `]
})
export class CatalogoComponent {
  categorias: Categoria[] = [
    {
      nombre: 'Aplicaciones Móviles',
      abierta: true,
      servicios: [
        {
          nombre: 'Desarrollo Nativo',
          descripcion: 'Apps para iOS y Android con el mejor rendimiento y experiencia de usuario.'
        },
        {
          nombre: 'Apps Híbridas',
          descripcion: 'Soluciones multiplataforma usando tecnologías como Ionic y Flutter.'
        }
      ]
    },
    {
      nombre: 'Aplicaciones Web',
      abierta: false,
      servicios: [
        {
          nombre: 'Web Corporativa',
          descripcion: 'Sitios web modernos, responsivos y optimizados para tu empresa.'
        },
        {
          nombre: 'Portales y Plataformas',
          descripcion: 'Desarrollo de portales, intranets y sistemas de gestión personalizados.'
        }
      ]
    },
    {
      nombre: 'Consultoría y Otros Servicios',
      abierta: false,
      servicios: [
        {
          nombre: 'Consultoría IT',
          descripcion: 'Asesoría experta para transformar digitalmente tu negocio.'
        },
        {
          nombre: 'Cloud Solutions',
          descripcion: 'Implementación y migración de soluciones en la nube.'
        }
      ]
    }
  ];

  servicioSeleccionado: Servicio | null = null;

  toggleCategoria(idx: number) {
    this.categorias[idx].abierta = !this.categorias[idx].abierta;
  }

  seleccionarServicio(cat: Categoria, serv: Servicio) {
    this.servicioSeleccionado = serv;
  }
}