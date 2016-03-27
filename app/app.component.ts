import {Component, OnInit} from 'angular2/core';
import {PostService} from './post.service';
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'my-app',
    template: `
      <div *ngIf="isLoading">
        <i class="fa fa-3x fa-spinner fa-spin"></i>
      </div>
  `,
    providers: [PostService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
    isLoading = true;

    constructor(private _postService: PostService){

    }
    
    ngOnInit(){
        this._postService.getPosts()
            .subscribe(posts => {
                this.isLoading = false;
                console.log(posts[0].id)
            });
    }
}