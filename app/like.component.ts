import {Component, Input} from 'angular2/core'
import {LikeService} from "./like.service";


@Component({
    selector: 'like',
    template: `
      <i class="glyphicon glyphicon-heart"
        [class.selected]="isLiked"
        (click)="onClick()">
      </i><span>{{ likeCount }}</span>

    `,
    styles: [`
        .glyphicon-heart {
          color: #ccc;
          font-size: 30px;
          cursor: pointer;
        }
        .glyphicon-heart.selected {
          color: deeppink;
        }
    `],
    providers: [LikeService]
})

export class LikeComponent {
    @Input() isLiked = false;

    likeCount: number;

    constructor(likeService: LikeService) {
        this.likeCount = likeService.getLikeCount();
    }

    onClick() {
        this.isLiked = !this.isLiked;
        this.likeCount += this.isLiked ? 1 : -1;
    }


    
}