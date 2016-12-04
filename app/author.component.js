"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var author_service_1 = require('./author.service');
var AuthorComponent = (function () {
    function AuthorComponent(authorService) {
        this.title = " The title of Author page";
        this.authores = authorService.getAuthores();
    }
    AuthorComponent = __decorate([
        core_1.Component({
            selector: 'authores',
            template: "\n    <h3>{{title}}</h3>\n    <h4>Author</h4>\n    <ul class = \"authores\">\n         <li *ngFor=\"let author of authores\">{{author}}</li>\n    </ul>\n     ",
            providers: [author_service_1.AuthorService]
        }), 
        __metadata('design:paramtypes', [author_service_1.AuthorService])
    ], AuthorComponent);
    return AuthorComponent;
}());
exports.AuthorComponent = AuthorComponent;
//# sourceMappingURL=author.component.js.map