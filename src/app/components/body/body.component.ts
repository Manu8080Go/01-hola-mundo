import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})

export class BodyComponent {
  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parker'
  }

  mostrar: boolean;
  personajes: string[];

  constructor() {
    this.mostrar = true;
    this.personajes = ['Spiderman', 'Venom', 'Dr. Octopus'];
  }

  MostrarOcultar(): boolean{
    if(this.mostrar){
      this.mostrar = false;
    } else{
      this.mostrar = true;
    }

    return this.mostrar;
  }

}

