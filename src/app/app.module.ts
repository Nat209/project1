import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CfooterComponent } from './cfooter/cfooter.component';
import { CheaderComponent } from './cheader/cheader.component';
import { CformComponent } from './cform/cform.component';
import { CcourseComponent } from './ccourse/ccourse.component';
import { FormsModule } from '@angular/forms';
import { CaboutUsComponent } from './cabout-us/cabout-us.component';
import { CcontactComponent } from './ccontact/ccontact.component';
import { ClistCoursesComponent } from './clist-courses/clist-courses.component';
import { CcontadorComponent } from './ccontador/ccontador.component';
import { ChomeComponent } from './chome/chome.component';
import { CaddComponent } from './ccontador/cadd/cadd.component';
import { CminComponent } from './ccontador/cmin/cmin.component';
;

@NgModule({
  declarations: [
    AppComponent,
    CfooterComponent,
    CheaderComponent,
    CformComponent,
    CcourseComponent,
    CaboutUsComponent,
    CcontactComponent,
    ClistCoursesComponent,
    CcontadorComponent,
    ChomeComponent,
    CaddComponent,
    CminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
