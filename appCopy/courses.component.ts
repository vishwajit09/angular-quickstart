import {Component} from '@angular/core';
import {CourseService} from './course.service';
@Component({
    selector:'courses',
    template :`
    <h1>{{title}}</h1>
    <h2>Courses</h2>
    <ul class = "courses">
         <li *ngFor="let course of courses">{{course}}</li>
    </ul>
     ` ,   
     providers:[CourseService]
    })
export class CoursesComponent {
    title =  " The title of courses page";
    courses ;
 constructor(courseService:CourseService){
     this.courses =courseService.getCourses();

 }
}
