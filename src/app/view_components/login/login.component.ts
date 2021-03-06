import { Component, OnInit, Input, Output, EventEmitter, ViewChild, Host } from '@angular/core';
import { UserService } from '../../services/user.service'

import { MatDialog } from '@angular/material/dialog';
import { ConnectionPanelComponent } from 'src/app/panels/connection-panel/connection-panel.component';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
import { User } from 'src/app/interfaces/user';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(
    private _router:Router,
    private _socketService:SocketService,
    private _userService:UserService,
    private dialog:MatDialog
    ) { }

  ngOnInit(): void {

   }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConnectionPanelComponent, {
      width: '50vmin',
    });
    dialogRef.componentInstance.userLogin.subscribe(event => {
      dialogRef.close()
      this._router.navigate(['/home']);
    })
    dialogRef.componentInstance.registerationEvent.subscribe(_ => {
      dialogRef.close()
    })
  }
}
