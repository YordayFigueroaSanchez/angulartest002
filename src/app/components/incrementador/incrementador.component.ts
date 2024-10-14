import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit{
  ngOnInit(): void {
    this.btnClass = `btn ${ this.btnClass }`
  }

  // @Input('valor') progreso: number = 55;
  @Input() progreso: number = 55;
  @Input() btnClass: string = "btn btn-info";

  // @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();
  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  cambiarValor(cantidad : number){
    
    if (this.progreso >= 100 && cantidad >= 0) {
      this.valorSalida.emit(100)
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && cantidad < 0) {
      this.valorSalida.emit(0)
      return this.progreso = 0;
    }

    this.progreso += cantidad;
    this.valorSalida.emit(this.progreso)
  }
}
