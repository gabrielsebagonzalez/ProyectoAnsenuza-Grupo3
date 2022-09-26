import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './modules/navbar/navbar.module';
import { AlojamientosModule } from './modules/alojamientos/alojamientos.module';
import { GastronomiaModule } from './modules/gastronomia/gastronomia.module';
import { AgenciasModule } from './modules/agencias/agencias.module';
import { AtractivosModule } from './modules/atractivos/atractivos.module';
import { ActividadesModule} from './modules/actividades/actividades.module';
import { HomeModule } from './modules/home/home.module';
import { FooterModule } from './modules/footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    NavbarModule,
    AlojamientosModule,
    GastronomiaModule,
    AgenciasModule,
    AtractivosModule,
    ActividadesModule,
    HomeModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
