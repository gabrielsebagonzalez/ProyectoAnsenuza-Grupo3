import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlojamientosRoutingModule } from './alojamientos-routing.module';
import { AlojamientosComponent } from './alojamientos/alojamientos.component';
import { PortadaComponent } from './portada/portada.component';
import { CardsComponent } from './cards/cards.component';
import { RouterModule } from '@angular/router';
import { FormularioModule } from '../formulario/formulario.module';



@NgModule({
  declarations: [
    AlojamientosComponent,
    PortadaComponent,
    CardsComponent,


  ],
  imports: [
    CommonModule,
    AlojamientosRoutingModule,
    FormularioModule
  ],
  exports: [
    AlojamientosComponent,
    PortadaComponent,
    CardsComponent,

  ],
})
export class AlojamientosModule { }




