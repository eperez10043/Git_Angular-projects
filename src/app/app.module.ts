import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Tarea crear un nuevo módulo llamdo contador.module.ts

import { HeroesModule } from './heroes/heroes.module';
import { ContadorMoude } from './contador/contador.module';



@NgModule({
  declarations: [
    AppComponent,
 

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorMoude

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
