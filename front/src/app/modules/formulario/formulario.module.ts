import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FormularioRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormularioComponent
  ]
})
export class FormularioModule { }
