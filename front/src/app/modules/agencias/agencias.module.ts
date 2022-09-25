import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciasRoutingModule } from './agencias-routing.module';
import { AgenciasComponent } from './agencias/agencias.component';


@NgModule({
  declarations: [
    AgenciasComponent
  ],
  imports: [
    CommonModule,
    AgenciasRoutingModule
  ]
})
export class AgenciasModule { }
