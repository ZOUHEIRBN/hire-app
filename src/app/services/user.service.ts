import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User, USERS } from '../user-thumbnail/user';
import { SERVER_URL } from './offer.service'
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _loginLetPass = new Subject<User>();
  _loginLetPass$ = this._loginLetPass.asObservable();

  constructor(private httpClient:HttpClient) { }

  public getUsers(){
		return this.httpClient.get(SERVER_URL+"users");
  }

  registerUser(User){
    return true;
  }

  loginUser(user){
    var users;
    this.httpClient.get(SERVER_URL+"users").subscribe(data=>{
      users = data;
      function findUser(loop_user){
        return loop_user.login === user.login && loop_user.password === user.password;
      }
      var find = users.filter(findUser);

      //if the user is in the database
      if(find.length > 0)
      {
        this._loginLetPass.next(user);
      }
   });
  }
}
