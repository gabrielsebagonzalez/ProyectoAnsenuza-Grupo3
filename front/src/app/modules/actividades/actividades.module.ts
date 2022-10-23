import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadesRoutingModule } from './actividades-routing.module';
import { ActividadesComponent } from './actividades/actividades.component';
import { PortadaComponent } from './portada/portada.component';


@NgModule({
  declarations: [
    ActividadesComponent,
    PortadaComponent
  ],
  imports: [
    CommonModule,
    ActividadesRoutingModule
  ]
})
export class ActividadesModule { }
