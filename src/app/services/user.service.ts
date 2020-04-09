import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User, USERS } from '../interfaces/user';
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
    var fetchedData = await fetch(SERVER_URL+"users?id="+id);
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  }
  public async getUserByEmail(email){
    var fetchedData = await fetch(SERVER_URL+"users?email="+email);
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  }
  public getAllUsers(){
    return this.httpClient.get(SERVER_URL+"users").pipe(map(response => {
      return response;
    }));
  }
  public async getUserByMeta(user){
    var str = '?'
    for(let key in user){
      str = str + key + "=" + user[key].replace(' ','%20') + "&"
    }

    var fetchedData = await fetch(SERVER_URL+"users/"+str);
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  }


  // Special methods
  registerUser(user){
    return this.httpClient.post<User>(SERVER_URL+"users", user, httpOptions)
  }
  loginUser(user){
    this.getUserByMeta(user)
    .then((response) => {
      if(response.length > 0)
      {
        this._user.next(response[0])
      }
    })
  }
}
