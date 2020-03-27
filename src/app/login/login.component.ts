import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserService } from '../services/user.service'
import { OfferService } from "../services/offer.service";
import { User } from '../user/user';
import { InvokeFunctionExpr } from '@angular/compiler';

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
