import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  public async getPosts(){
		var fetchedData = await fetch(SERVER_URL+"posts");
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  }
  public async getPostsByType(type){
		var fetchedData = await fetch(SERVER_URL+"posts");
    var fetchedDataJSON = await fetchedData.json();
    fetchedDataJSON = fetchedDataJSON.filter(element => element['type']+"" === type+"");
    return fetchedDataJSON;
  }
  public async getUserPosts(id){
    var fetchedData = await fetch(SERVER_URL+"posts");
    var fetchedDataJSON = await fetchedData.json();
    fetchedDataJSON = fetchedDataJSON.filter(element => element['ownerId']+"" === id+"" && element['ownerType']+"" === "user");
    return fetchedDataJSON;

  }
  public async getCompanyPosts(id){
    var fetchedData = await fetch(SERVER_URL+"posts");
    var fetchedDataJSON = await fetchedData.json();
    fetchedDataJSON = fetchedDataJSON.filter(element => element['ownerId']+"" === id+"" && element['ownerType']+"" === "company");
    return fetchedDataJSON;

  }
}


export const SERVER_URL = "http://localhost:3000/";
