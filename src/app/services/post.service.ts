import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SERVER_URL, httpOptions } from './_server_variables'
import { Post, Comment } from '../interfaces/post';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private _postlist = new Subject<Post[]>();
  // _postlist$ = this._postlist.asObservable();

  constructor(private httpClient:HttpClient, private _userService:UserService) { }
  public async getPost(id){
    var fetchedData = await fetch(SERVER_URL+"posts/"+id);
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  }
  public getPosts(){
    let current_id = '0'
    if(this._userService.getCurrentUser()){
      current_id = this._userService.getCurrentUser().id
    }
		return this.httpClient.get(SERVER_URL+"posts/current_id="+current_id).pipe(map(response => {
      return response['body'];
    }));
  }
  public getPostById(id){
		return this.httpClient.get(SERVER_URL+"posts/"+id).pipe(map(response => {
      return response['body'];
    }));
  }
  public getPostsByType(type){
		return this.httpClient.get(SERVER_URL+"posts/type/"+type).pipe(map(response => {
      return response['body'];
    }));
  }
  public getUserPosts(id){
    return this.httpClient.get(SERVER_URL+"posts/ownerId/"+id).pipe(map(response => {
      return response['body'];
    }));
  }
  public async getCompanyPosts(id){
    return this.httpClient.get(SERVER_URL+"posts/ownerId/"+id).pipe(map(response => {
      return response;
    }));
  }
  createPost(post){
    let current_id = this._userService.getCurrentUser().id || 0
    return this.httpClient.post<Post>(SERVER_URL+"posts/current_id="+current_id, post, httpOptions)
  }
  deletePost(post:Post){
    return this.httpClient.delete<Post>(SERVER_URL+"posts/"+ post.id, httpOptions)
  }
  editPost(post:Post){
    let current_id = this._userService.getCurrentUser().id || 0
    return this.httpClient.put<Post>(SERVER_URL+"posts/current_id="+current_id, post, httpOptions)
  }
  follow(post:Post, user_id){
    return this.httpClient.put<Post>(SERVER_URL+"posts/follow/"+user_id, post, httpOptions)
  }


  addComment(post_id, comment){
    return this.httpClient.post<Comment>(SERVER_URL+"posts/"+post_id+"/comment/0", comment, httpOptions)
  }
  deleteComment(post_id, comment_id){
    return this.httpClient.delete<Comment>(SERVER_URL+"posts/"+post_id+"/comment/" + comment_id)
  }
}


