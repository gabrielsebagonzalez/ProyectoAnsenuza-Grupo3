import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario/formulario.component';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';

const routes: Routes = [
  {
    path: '',
    component: AlojamientosComponent,
    children: []
  },

  {
    path: "formulario",
    component: FormularioComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlojamientosRoutingModule { }




