import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent  {

  progreso1: number = 15;
  progreso2: number = 45;

  get getProgreso1(){
    // console.log('paso por getProgreso');
    const aaa : string = `${ this.progreso1 }%`;
    // console.log(aaa);
    return aaa;
  }

  get getProgreso2(){
    // console.log('paso por getProgreso');
    const aaa : string = `${ this.progreso2 }%`;
    // console.log(aaa);
    return aaa;
  }


}
