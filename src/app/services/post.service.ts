import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post, Comment } from '../interfaces/post';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private _postlist = new Subject<Post[]>();
  // _postlist$ = this._postlist.asObservable();

  constructor(private httpClient:HttpClient) { }
  public async getPost(id){
    var fetchedData = await fetch(SERVER_URL+"posts/"+id);
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  }
  public getPosts(){
		return this.httpClient.get(SERVER_URL+"posts/").pipe(map(response => {
      console.log(response['body'])
      return response['body'];
    }));
  }
  public getPostById(id){
		return this.httpClient.get(SERVER_URL+"posts/"+id).pipe(map(response => {
      console.log(response)
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
      console.log(response);

      return response;
    }));
  }
  createPost(post){
    return this.httpClient.post<Post>(SERVER_URL+"posts/", post, httpOptions)
  }
  deletePost(post:Post){
    return this.httpClient.delete<Post>(SERVER_URL+"posts/"+ post.id, httpOptions)
  }
  editPost(post:Post){
    return this.httpClient.put<Post>(SERVER_URL+"posts/", post, httpOptions)
  }



  addComment(post_id, comment){
    return this.httpClient.post<Comment>(SERVER_URL+"posts/"+post_id+"/comment/0", comment, httpOptions)
  }
  deleteComment(post_id, comment_id){
    return this.httpClient.delete<Comment>(SERVER_URL+"posts/"+post_id+"/comment/" + comment_id)
  }
}


export const SERVER_URL = "http://localhost:3000/";
export const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE',
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
