import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cadd',
  templateUrl: './cadd.component.html',
  styleUrl: './cadd.component.css'
})
export class CaddComponent {
  @Input()
  counterAdd:number=0;

  @Output()
  emitAdd: EventEmitter<number> = new EventEmitter();

increment():void{
  console.log(this.counterAdd);
  this.counterAdd++;
}
}
