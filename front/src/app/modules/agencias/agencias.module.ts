import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgenciasRoutingModule } from './agencias-routing.module';
import { AgenciasComponent } from './agencias/agencias.component';
import { PortadaComponent } from './portada/portada.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    AgenciasComponent,
    PortadaComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    AgenciasRoutingModule
  ]
})
export class AgenciasModule { }
