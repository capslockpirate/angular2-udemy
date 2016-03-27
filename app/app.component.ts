import {Component} from 'angular2/core';
import {ControlGroup, FormBuilder} from 'angular2/common';

@Component({
    selector: 'my-app',
    template: `
      <form [ngFormModel]="form">
        <input type="text" ngcontrol="search">
      </form>
  `
})
export class AppComponent {
    form: ControlGroup;
    constructor(fb: FormBuilder){
        this.form = fb.group({
            search: []
        });
    }
}