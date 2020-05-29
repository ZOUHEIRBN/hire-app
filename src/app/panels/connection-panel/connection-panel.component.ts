import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserLogin, User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'connection-panel',
  templateUrl: './connection-panel.component.html',
  styleUrls: ['./connection-panel.component.css']
})
export class ConnectionPanelComponent implements OnInit {
  userCredentials:UserLogin = new User()
  @Output() userLogin = new EventEmitter();
  constructor(private _userService:UserService, private router:Router, private _socketService:SocketService) { }

  ngOnInit(): void {
  }

  loginUser(event){
    event.preventDefault();
    this._userService.getUserByCredentials({"email":this.userCredentials.email, "password":this.userCredentials.password})
    .subscribe(response => {
      let user = <User>response;
      this._userService.setCurrentUser(user)
      this._socketService.socket.emit('new_connection', user)
      this.userLogin.emit(user)
    })

  }
  gotoRegister(){
    var user = {"email":"", "password":""};
    if(this.userCredentials.email && this.userCredentials.email !== ""){
      user["email"] = this.userCredentials.email;
    }
    if(this.userCredentials.password && this.userCredentials.password !== ""){
      user["password"] = this.userCredentials.password;
    }
    //this.dialogRef.close();
    this.router.navigate(['/register'], {state: {userData: user}})
  }
}
