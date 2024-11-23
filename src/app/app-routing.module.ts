import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CcourseComponent } from './ccourse/ccourse.component';
import { CcontadorComponent } from './ccontador/ccontador.component';
import { AppComponent } from './app.component';
import { ClistCoursesComponent } from './clist-courses/clist-courses.component';
import { ChomeComponent } from './chome/chome.component';

const routes: Routes = [
{path:'form', component:CcourseComponent},
{path:'contador', component:CcontadorComponent},
{path:'course', component:ClistCoursesComponent},
{path:'', component:ChomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
