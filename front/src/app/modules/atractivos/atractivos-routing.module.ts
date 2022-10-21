import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtractivosComponent } from './atractivos/atractivos.component';

import { IglesiasComponent } from './iglesias/iglesias.component';
import { MonumentosComponent } from './monumentos/monumentos.component';
import { MuseosComponent } from './museos/museos.component';
import { ParquesComponent } from './parques/parques.component';
import { PlazasComponent } from './plazas/plazas.component';
import { RinconesComponent } from './rincones/rincones.component';


const routes: Routes = [

  {
    path: '',
    component: AtractivosComponent,
    children: [

    ]
  },
  {
    path: 'iglesias',
    canActivate: [],
    component: IglesiasComponent,
  },
  {
    path: 'monumentos',
    canActivate: [],
    component: MonumentosComponent,
  },
  {
    path: 'museos',
    canActivate: [],
    component: MuseosComponent,
  },
  {
    path: 'parques',
    canActivate: [],
    component: ParquesComponent,
  },
  {
    path: 'plazas',
    canActivate: [],
    component: PlazasComponent,
  },
  {
    path: 'rincones',
    canActivate: [],
    component: RinconesComponent,
  },
  {path:'**',
  redirectTo:'/',
  pathMatch:'full'
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtractivosRoutingModule { }
