import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import {CoursesComponent} from './courses.component';
import {CourseService} from './course.service';
import {AuthorComponent} from './author.component';
import {AuthorService} from './author.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule],
  declarations: [ AppComponent,CoursesComponent,AuthorComponent],
  bootstrap:    [ AppComponent,CoursesComponent,AuthorComponent]
})
export class AppModule { }