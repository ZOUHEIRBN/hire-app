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
  public setCurrentUser(user){
    return this._user.next(user)
  }

  public async getUser(id){
    return this.httpClient.get(SERVER_URL+"users/"+id).pipe(map(response => {
      return response['body'];
    }));
  }
  public getUserByEmail(email){
    return this.httpClient.get(SERVER_URL+"users/email/"+email)
  }
  public getAllUsers(){
    let current_user = '0'
    if(this._user.getValue()){
      current_user = this._user.getValue().id
    }
    return this.httpClient.get(SERVER_URL+"users/?current_user="+current_user).pipe(map(response => {
      return response['body'];
    }));
  }

  public getUserByCredentials(user){
    return this.httpClient.get(SERVER_URL+"users/credentials/"+user.email+"/"+user.password);
  }

  registerUser(user){
    return this.httpClient.post<User>(SERVER_URL+"users/", user, httpOptions)
  }

  disconnect(){
    this._user.next(null)
  }

  follow(user_id){
    return this.httpClient.put<User>(SERVER_URL+"users/"+user_id+"/follow", this._user.value)
  }
}
