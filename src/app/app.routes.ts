import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Designo Agency home',
    component: HomeComponent,
    children: [
      {
        path: 'web-design',
        loadComponent: () =>
          import('./home/web-design/web-design.component').then(
            (m) => m.WebDesignComponent,
          ),
        title: 'Designo Agency web design portfolio',
      },
      {
        path: 'app-design',
        loadComponent: () =>
          import('./home/app-design/app-design.component').then(
            (m) => m.AppDesignComponent,
          ),
        title: 'Designo Agency app design portfolio',
      },
      {
        path: 'graphic-design',
        loadComponent: () =>
          import('./home/graphic-design/graphic-design.component').then(
            (m) => m.GraphicDesignComponent,
          ),
        title: 'Designo Agency graphic design portfolio',
      },
    ],
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((m) => m.AboutComponent),
    title: 'Designo Agency about',
  },
  {
    path: 'locations',
    loadComponent: () =>
      import('./locations/locations.component').then(
        (m) => m.LocationsComponent,
      ),
    title: 'Designo Agency locations',
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
    title: 'Designo Agency contact',
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
