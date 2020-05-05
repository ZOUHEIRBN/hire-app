import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post, def_post, posttypes } from 'src/app/interfaces/post';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any = [];
  loading_state = true
  posttypes = posttypes;
  @Input() newPost:Post = def_post;
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
  fileSelect(event){
    const reader = new FileReader();
    reader.onload = _ => this.newPost['imageUrl'] = reader.result;
    reader.readAsDataURL(event.target.files[0]);
  }
  createPost(){

    this._postService.createPost(this.newPost).subscribe(_ => {
      this.posts.unshift(this.newPost)
    })
  }
}
