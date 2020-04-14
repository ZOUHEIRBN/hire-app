import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { User } from '../interfaces/user';
import { SERVER_URL, httpOptions } from './post.service'
import { Subject, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _user = new BehaviorSubject<User>(null);
  _user$ = this._user.asObservable();

  constructor(private httpClient:HttpClient) { }
  public getCurrentUser(){
    return this._user.value
  }
  public async getUser(id){
    var fetchedData = await fetch(SERVER_URL+"users/"+id);
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  }
  public async getUserByEmail(email){
    var fetchedData = await fetch(SERVER_URL+"users/email/"+email);
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  }
  public getAllUsers(){
    return this.httpClient.get(SERVER_URL+"users/?current_user="+this._user.getValue().email).pipe(map(response => {
      return response['body'];
    }));
  }

  public async getUserByCredentials(user){
    var fetchedData = await fetch(SERVER_URL+"users/credentials/"+user.email+"/"+user.password);
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  }

  // Special methods
  registerUser(user){
    return this.httpClient.post<User>(SERVER_URL+"users/", user, httpOptions)
  }
  async loginUser(user){
    this.getUserByCredentials(user)
    .then((response) => {
      if(JSON.stringify(response) !== '{}')
      {
        this._user.next(response);
      }
    })
    return this._user.value
  }
  disconnect(){
    this._user.next(null)
  }
}
