import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GastronomiaRoutingModule } from './gastronomia-routing.module';
import { GastronomiaComponent } from './gastronomia/gastronomia.component';


@NgModule({
  declarations: [
    GastronomiaComponent
  ],
  imports: [
    CommonModule,
    GastronomiaRoutingModule
  ]
})
export class GastronomiaModule { }
