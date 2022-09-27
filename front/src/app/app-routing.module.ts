import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [NotLoggedInGuard],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'navbar',
    canActivate: [NotLoggedInGuard],
    loadChildren: () => import('./modules/navbar/navbar.module').then(m => m.NavbarModule),
  },
  {
    path: 'home',
    canActivate: [NotLoggedInGuard],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'gastronomia',
    canActivate: [NotLoggedInGuard],
    loadChildren: () => import('./modules/gastronomia/gastronomia.module').then(m => m.GastronomiaModule),
  },
  {
    path: 'atractivos',
    canActivate: [NotLoggedInGuard],
    loadChildren: () => import('./modules/atractivos/atractivos.module').then(m => m.AtractivosModule),
  },
    {
      path: 'alojamientos',
      canActivate: [NotLoggedInGuard],
      loadChildren: () => import('./modules/alojamientos/alojamientos.module').then(m => m.AlojamientosModule),
    },
    {
      path: 'agencias',
      canActivate: [NotLoggedInGuard],
      loadChildren: () => import('./modules/agencias/agencias.module').then(m => m.AgenciasModule),
    },
    {
      path: 'actividades',
      canActivate: [NotLoggedInGuard],
      loadChildren: () => import('./modules/actividades/actividades.module').then(m => m.ActividadesModule),
    },
    {
      path: 'footer',
      canActivate: [NotLoggedInGuard],
      loadChildren: () => import('./modules/footer/footer.module').then(m => m.FooterModule),
    },
    {path:'**',
    redirectTo:'/',
    pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
