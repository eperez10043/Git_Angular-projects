import { Component } from '@angular/core';




@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Ironman';
    edad  : number = 35;

// Como es una CLASE, puedo crear GETERS y SETERS

    get nombreCapitaLizado(): string {
	return this.nombre.toUpperCase();
    }

    obtenerNombre() :string {
      //  return this.nombre + '-' + this.edad.toString()
        return ` ${ this.nombre } - ${ this.edad }   ` ;    
    }
    cambiarNombre() :void {
        this.nombre = 'SpiderMan';
    }
    cambiarEdad(): void {
        this.edad = 80;
    }

}