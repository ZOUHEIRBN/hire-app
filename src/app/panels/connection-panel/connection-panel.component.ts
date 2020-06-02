import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserLogin, User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { SocketService } from 'src/app/services/socket.service';
import { UserRegistrationPanelComponent } from '../user-registration-panel/user-registration-panel.component';

@Component({
  selector: 'connection-panel',
  templateUrl: './connection-panel.component.html',
  styleUrls: ['./connection-panel.component.css']
})
export class ConnectionPanelComponent implements OnInit {
  userCredentials:UserLogin = new User()
  @Output() userLogin = new EventEmitter();
  @Output() registerationEvent = new EventEmitter();
  constructor(private _dialog:MatDialog, private _userService:UserService, private router:Router, private _socketService:SocketService) { }

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
    this.registerationEvent.emit()
    let dialog = this._dialog.open(UserRegistrationPanelComponent, {
      width: '90vw',
      maxHeight: '90vh'
    })
    dialog.componentInstance.doneEvent.subscribe(event => {
      this._userService.registerUser(event).subscribe((data) => {
        this._userService.setCurrentUser(<User>data)
        this.router.navigate(['/home'])
        dialog.close()
      });
    })
  }
}
