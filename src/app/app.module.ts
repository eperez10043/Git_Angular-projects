import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { ContadorComponent } from './contador/contador/contador.component';
//import { HeroeComponent } from './heroes/heroe/heroe.component';
//import { ListadoComponent } from './heroes/listado/listado.component';

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

