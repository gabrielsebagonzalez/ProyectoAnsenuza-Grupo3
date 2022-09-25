import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtractivosRoutingModule } from './atractivos-routing.module';
import { AtractivosComponent } from './atractivos/atractivos.component';


@NgModule({
  declarations: [
    AtractivosComponent
  ],
  imports: [
    CommonModule,
    AtractivosRoutingModule
  ]
})
export class AtractivosModule { }
