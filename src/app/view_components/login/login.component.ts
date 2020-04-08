import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Input() login;
  @Input() password;
  @Output() userLogin = new EventEmitter();
  constructor(private _userService:UserService, private router:Router) {

  }
  loginUser(event){
    event.preventDefault();
    this._userService.loginUser({"email":this.login, "password":this.password});
    if(this._userService._user$){
      this.userLogin.emit(this._userService._user$)
    }
  }
  gotoRegister(){
    var user = {"email":"", "password":""};
    if(this.login && this.login !== ""){
      user["email"] = this.login;
    }
    if(this.password && this.password !== ""){
      user["password"] = this.password;
    }
    this.router.navigate(['/register'], {state: {userData: user}})
  }
  ngOnInit(): void {

  }

}
