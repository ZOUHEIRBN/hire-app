import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/post';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  newComment = new Comment()
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this.newComment.commenting_user = this._userService.getCurrentUser().id
  }
  like(event){
    console.log(event)
  }

}
