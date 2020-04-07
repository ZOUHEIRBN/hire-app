import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Post } from '../interfaces/post';
import 'rxjs/operators'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private _postlist = new Subject<Post[]>();
  // _postlist$ = this._postlist.asObservable();

  constructor(private httpClient:HttpClient) { }

  public async getPosts(){
		var fetchedData = await fetch(SERVER_URL+"posts");
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  }
  public getPostsByType(type){
		return this.httpClient.get(SERVER_URL+"posts?type="+type).pipe(map(response => {
      return response;
    }));
  }
  public getUserPosts(id){
    return this.httpClient.get(SERVER_URL+"posts?ownerId="+id).pipe(map(response => {
      return response;
    }));
  }
  public async getCompanyPosts(id){
    return this.httpClient.get(SERVER_URL+"posts?ownerId="+id).pipe(map(response => {
      return response;
    }));
  }
}


export const SERVER_URL = "http://localhost:3000/";
