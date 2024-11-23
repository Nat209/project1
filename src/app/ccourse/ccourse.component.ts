import { Component } from '@angular/core';

@Component({
  selector: 'app-ccourse',
  templateUrl: './ccourse.component.html',
  styleUrl: './ccourse.component.css'
})
export class CcourseComponent {
//declaracion de propiedades, atributos o variables
 private courses!:string[];
 private response:string|boolean; //Union de tipos
 dir:string="Unimepresarial";

 tittle:string="Formulario de registro"

constructor(){
  this.courses=['JAVA', 'JAVASCRIPT', 'PYTHON'];
  this.response="";
}

//metoddos
public getCourses():string[]{
  return this.courses;
}
public getResponse():string|boolean{
  return this.response;
}


private registerCourse(name:string, age:string, course:string){
  return this.response=`Se ha inscrito en el curso: ${course} el estudiante: ${name} de edad: ${age}`;
}

public getRegisterCourse(name:string, age:string, course:string){
   this.registerCourse(name, age, course);
}


}
