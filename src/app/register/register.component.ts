import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../user-thumbnail/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() user:User;

  constructor(private _userService:UserService) {

  }
  registerUser(event){
    event.preventDefault();
    this._userService.registerUser(this.user);
  }
  loginUser(event){
    event.preventDefault();
    this._userService.loginUser(this.user);
  }
  ngOnInit(): void {

  }
}
