import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() user = {};

  constructor(private _userService:UserService) {

  }
  updateField(event){
    var target = event.target;
    let key = target.name
    let value = target.value
    this.user[key] = value
  }
  registerUser(event){
    event.preventDefault();
    this._userService.registerUser(this.user).subscribe((data) => {
      console.log(data)
    });
    //this._userService.loginUser(this.user)
  }
  loginUser(event){
    event.preventDefault();
    this._userService.loginUser(this.user);
  }
  ngOnInit(): void {

  }
}
