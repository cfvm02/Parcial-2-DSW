import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ConferenciasComponent } from './conferencias/conferencias.component';
import { ConferenciasDetailComponent } from './conferencias/conferencias-detail/conferencias-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ConferenciasComponent,
    ConferenciasDetailComponent // Declara el componente de detalle
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
