import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post, def_post, posttypes } from 'src/app/interfaces/post';
import { FormControl } from '@angular/forms';
import { developDown } from 'src/app/app-animations';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/interfaces/user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations:[developDown]
})
export class HomeComponent implements OnInit {
  posts: any[] = [];
  loading_state = true
  currentUser:User
  @Output() onHome = new EventEmitter()
  constructor(private _postService:PostService, private _userService:UserService) {}

  ngOnInit(): void {
    this.currentUser = this._userService.getCurrentUser()
    this.onHome.emit(this.currentUser)
    this.loadPostData()
  }
  async loadPostData(){
    this.loading_state = true;
    this._postService.getPosts().subscribe((data) => {
      this.posts = data
      setTimeout(() => {this.loading_state = false}, 1000)
    })
  }
  createPost(event){
    event.ownerId = this._userService.getCurrentUser().id;
    this._postService.createPost(event).subscribe(_ => {
      //this.posts.unshift(this.newPost)
      console.log(event)
    })
  }
  deletePost(event){
    let index = this.posts.indexOf(event)
    if(index > -1){
      this.posts.splice(index, 1)
    }
  }

}
