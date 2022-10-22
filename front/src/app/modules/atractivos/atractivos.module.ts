import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtractivosRoutingModule } from './atractivos-routing.module';
import { AtractivosComponent } from './atractivos/atractivos.component';
import { PlazasComponent } from './plazas/plazas.component';
import { MonumentosComponent } from './monumentos/monumentos.component';
import { IglesiasComponent } from './iglesias/iglesias.component';
import { RinconesComponent } from './rincones/rincones.component';
import { ParquesComponent } from './parques/parques.component';
import { MuseosComponent } from './museos/museos.component';


@NgModule({
  declarations: [
    AtractivosComponent,
    PlazasComponent,
    MonumentosComponent,
    IglesiasComponent,
    RinconesComponent,
    ParquesComponent,
    MuseosComponent
  ],
  imports: [
    CommonModule,
    AtractivosRoutingModule
  ]
})
export class AtractivosModule { }
