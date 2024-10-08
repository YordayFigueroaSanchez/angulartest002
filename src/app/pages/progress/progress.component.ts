import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progreso: number = 55;
  constructor() { }

  ngOnInit() {
  }

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
