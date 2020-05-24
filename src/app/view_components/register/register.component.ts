import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() user = {"badges":[]};

  constructor(private _userService:UserService) {

  }
  updateField(event){
    var target = event.target;
    let key = target.name
    let value = target.value
    this.user[key] = value
  }
  fileSelect(event){
    const reader = new FileReader();
    reader.onload = e => this.user['imageUrl'] = reader.result;
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.user['imageUrl'])

  }
  private validate(){
    console.log(this.user)
    return true
  }
  registerUser(event){
    event.preventDefault();
    if(this.validate()){
      this._userService.registerUser(this.user).subscribe((data) => {
        console.log(data)
      });
      //this._userService.loginUser(this.user)
    }

  }
  loginUser(event){
    event.preventDefault();
    //this._userService.loginUser(this.user);
  }
  ngOnInit(): void {

  }
}
