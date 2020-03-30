import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  @Input() login;
  @Input() password;
  constructor(private _userService:UserService) {

  }
  loginUser(event){
    event.preventDefault();
    this._userService.loginUser({"login":this.login, "password":this.password});
  }
  ngOnInit(): void {

  }

}
