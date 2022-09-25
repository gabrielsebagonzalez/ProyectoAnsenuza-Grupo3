import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlojamientosRoutingModule } from './alojamientos-routing.module';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';


@NgModule({
  declarations: [
    AlojamientosComponent
  ],
  imports: [
    CommonModule,
    AlojamientosRoutingModule
  ]
})
export class AlojamientosModule { }
