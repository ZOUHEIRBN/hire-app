import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User, USERS } from '../user-thumbnail/user';
import { SERVER_URL } from './post.service'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private _user = new Subject<User>();
  _user$ = this._user.asObservable();

  constructor(private httpClient:HttpClient) { }
  public async getUser(id){
    var fetchedData = await fetch(SERVER_URL+"users");
    var fetchedDataJSON = await fetchedData.json();
    fetchedDataJSON = fetchedDataJSON.filter(element => element['id']+"" === id)
    return fetchedDataJSON;

  }
  public async getUserByLogin(login){
    var fetchedData = await fetch(SERVER_URL+"users/"+login);
    var fetchedDataJSON = await fetchedData.json();
    fetchedDataJSON = fetchedDataJSON.filter(element => element['login']+"" === login)
    return fetchedDataJSON;

  }
  public async getAllUsers(){
    var fetchedData = await fetch(SERVER_URL+"users");
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
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

  registerUser(User){
    return true;
  }
  loginUser(user){
    var fetcheduser;
    this.getUserByMeta(user)
    .then((response) => {
      if(response.length > 0)
      {
        this._user.next(response[0])
      }
    })
  }
}
