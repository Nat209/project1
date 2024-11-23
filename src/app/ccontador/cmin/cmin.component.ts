import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cmin',
  templateUrl: './cmin.component.html',
  styleUrl: './cmin.component.css'
})
export class CminComponent {
  @Input()
  counterMin:number=0;
  
  @Output()
  emitMin: EventEmitter<number> = new EventEmitter();
decrement():void{
  console.log(this.counterMin);
  this.counterMin--;
}
}
