import { Component, OnInit, Input, Inject } from '@angular/core';
import { Comment } from 'src/app/interfaces/post';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  newComment = new Comment()
  post_id;
  comments:Comment[]
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: any,
    private _userService:UserService,
    private _postService:PostService) { }

  ngOnInit(): void {
    this.post_id  = this.data.post_id
    this.comments = this.data.comments
  }
  like(event){
    console.log(event)
  }
  addComment(){
    this.newComment.commenting_user = this._userService.getCurrentUser().id
    this._postService.addComment(this.post_id, this.newComment).subscribe(() => {
      console.log(this.newComment)
    })
  }

}
