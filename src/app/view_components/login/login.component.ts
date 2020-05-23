import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service'

import { MatDialog } from '@angular/material/dialog';
import { ConnectionPanelComponent } from 'src/app/minicomponents/connection-panel/connection-panel.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  constructor(private _userService:UserService, private dialog:MatDialog) { }

  ngOnInit(): void {

   }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConnectionPanelComponent, {
      width: '50vmin',
    });
    dialogRef.componentInstance.userLogin.subscribe(_ => {
      dialogRef.close()
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
