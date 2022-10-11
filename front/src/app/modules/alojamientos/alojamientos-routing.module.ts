import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { PortadaComponent } from './portada/portada.component';

const routes: Routes = [
  {
    path: '',
    component: AlojamientosComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlojamientosRoutingModule { }
