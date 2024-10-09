import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent {

  // @Input('valor') progreso: number = 55;
  @Input() progreso: number = 55;

  get getProgreso(){
    // console.log('paso por getProgreso');
    const aaa : string = `${ this.progreso }%`;
    // console.log(aaa);
    return aaa;
  }

  cambiarValor(cantidad : number){
    
    if (this.progreso >= 100 && cantidad >= 0) {
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && cantidad < 0) {
      return this.progreso = 0;
    }

    this.progreso += cantidad;
  }
}
