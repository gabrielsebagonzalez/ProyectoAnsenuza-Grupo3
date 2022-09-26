import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastronomiaComponent } from './gastronomia/gastronomia.component';

const routes: Routes = [
  {
    path: '',
    component: GastronomiaComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GastronomiaRoutingModule { }
