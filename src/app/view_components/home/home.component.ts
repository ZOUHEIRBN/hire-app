import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any = [];
  loading_state = true


  constructor(private _postService:PostService) {}

  ngOnInit(): void {
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
