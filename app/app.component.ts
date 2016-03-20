import {Component} from 'angular2/core';
import {LikeComponent} from "./like.component";

@Component({
    selector: 'my-app',
    template: '<div class="wrapper"><like></like></div>',
    directives: [LikeComponent],
    styles: [`
      .wrapper {padding: 30px;}
    `]
})
export class AppComponent { }