import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlojamientosRoutingModule } from './alojamientos-routing.module';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { PortadaComponent } from './portada/portada.component';


@NgModule({
  declarations: [
    AlojamientosComponent,
    PortadaComponent
  ],
  imports: [
    CommonModule,
    AlojamientosRoutingModule
  ]
})
export class AlojamientosModule { }
