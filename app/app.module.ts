import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import {scfsComponent} from './scfs.component';
//import {CourseService} from './course.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule],
  declarations: [ AppComponent,scfsComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }