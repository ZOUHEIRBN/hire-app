import { Component, OnInit, Input } from '@angular/core';
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
  posts: any = [];
  loading_state = true
  currentUser:User

  constructor(private _postService:PostService, private _userService:UserService) {}

  ngOnInit(): void {
    this.currentUser = this._userService.getCurrentUser()
    this.loadPostData()
  }
  async loadPostData(){
    this.loading_state = true;
    let promise = await this._postService.getPosts()
    promise.subscribe((data) => {
      this.posts = data
      setTimeout(() => {this.loading_state = false}, 1000)
    })
  }



}
