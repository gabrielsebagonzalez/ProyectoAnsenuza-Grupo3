import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciasRoutingModule } from './agencias-routing.module';
import { AgenciasComponent } from './agencias/agencias.component';
import { PortadaComponent } from './portada/portada.component';


@NgModule({
  declarations: [
    AgenciasComponent,
    PortadaComponent
  ],
  imports: [
    CommonModule,
    AgenciasRoutingModule
  ]
})
export class AgenciasModule { }
