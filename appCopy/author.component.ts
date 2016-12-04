import {Component} from '@angular/core';
import {AuthorService} from './author.service';
@Component({
    selector:'authores',
    template :`
    <h3>{{title}}</h3>
    <h4>Author</h4>
    <ul class = "authores">
         <li *ngFor="let author of authores">{{author}}</li>
    </ul>
     ` ,   
     providers:[AuthorService]
    })
export class AuthorComponent {
    title =  " The title of Author page";
    authores ;
 constructor(authorService:AuthorService){
     this.authores =authorService.getAuthores();

 }
}
