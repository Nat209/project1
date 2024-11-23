import { Component } from '@angular/core';

@Component({
  selector: 'app-ccontador',
  templateUrl: './ccontador.component.html',
  styleUrl: './ccontador.component.css'
})
export class CcontadorComponent {

  counter:number=0;

  handleCounter(value:number){
    this.counter=value;
  }

  increment():void{
    this.counter++;
  }

  decrement():void{
    this.counter--;
  }


}
