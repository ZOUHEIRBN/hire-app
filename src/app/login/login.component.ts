import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Input() login;
  @Input() password;
  constructor(private _userService:UserService, private router:Router) {

  }
  loginUser(event){
    event.preventDefault();
    this._userService.loginUser({"login":this.login, "password":this.password});
  }
  gotoRegister(){
    var user = {"login":"", "password":""};
    if(this.login && this.login !== ""){
      user["login"] = this.login;
    }
    if(this.password && this.password !== ""){
      user["password"] = this.password;
    }
    this.router.navigate(['/register'], {state: {userData: user}})
  }
  ngOnInit(): void {

  }

}
