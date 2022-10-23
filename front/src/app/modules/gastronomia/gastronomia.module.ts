import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastronomiaRoutingModule } from './gastronomia-routing.module';
import { GastronomiaComponent } from './gastronomia/gastronomia.component';
import { PortadaComponent } from './portada/portada.component';


@NgModule({
  declarations: [
    GastronomiaComponent,
    PortadaComponent
  ],
  imports: [
    CommonModule,
    GastronomiaRoutingModule
  ]
})
export class GastronomiaModule { }
