import {Component, OnInit} from 'angular2/core';
import {GithubProfileComponent} from "./github-profile.component";


@Component({
    selector: 'my-app',
    template: `
      <github-profile></github-profile>
  `,
    directives: [GithubProfileComponent]
})
export class AppComponent {
    

}