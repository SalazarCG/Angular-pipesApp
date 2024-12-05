import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';

//Configuración del local de la app
import localeEsHN from '@angular/common/locales/es-HN';
import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsHN);


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    //Para colocar la fecha en el idioma que te interesa
    {provide: LOCALE_ID, useValue: 'es-HN'}
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
