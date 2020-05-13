import { Component, OnInit, Input } from '@angular/core';
import { posttypes, def_post } from 'src/app/interfaces/post';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { developDown } from 'src/app/app-animations';

@Component({
  selector: 'new-post-panel',
  templateUrl: './new-post-panel.component.html',
  styleUrls: ['./new-post-panel.component.css'],
  animations:[ developDown ]
})
export class NewPostPanelComponent implements OnInit {
  @Input() newPost = def_post
  posttypes = posttypes
  floatLabelControl = new FormControl('auto')
  showcomponent: string;
  constructor(private _userService:UserService, private _postService:PostService) { }

  ngOnInit(): void {

  }
  fileSelect(event){
    const reader = new FileReader();
    reader.onload = _ => this.newPost['imageUrl'] = reader.result;
    reader.readAsDataURL(event.target.files[0]);
  }
  createPost(){
    this.newPost.ownerId = this._userService.getCurrentUser().email;

    this._postService.createPost(this.newPost).subscribe(_ => {
      //this.posts.unshift(this.newPost)
    })
  }
  fetchSelectedType(){
    this.showcomponent = this.newPost.type + this.newPost.subject
  }

}
