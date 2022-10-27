import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastronomiaRoutingModule } from './gastronomia-routing.module';
import { GastronomiaComponent } from './gastronomia/gastronomia.component';
import { PortadaComponent } from './portada/portada.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    GastronomiaComponent,
    PortadaComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    GastronomiaRoutingModule
  ]
})
export class GastronomiaModule { }
