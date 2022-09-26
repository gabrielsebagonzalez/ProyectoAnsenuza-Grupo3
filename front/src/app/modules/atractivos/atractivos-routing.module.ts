import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtractivosComponent } from './atractivos/atractivos.component';

const routes: Routes = [
  {
    path: '',
    component: AtractivosComponent,
    children: [

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtractivosRoutingModule { }
