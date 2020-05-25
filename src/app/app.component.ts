import { Component, Input, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocketService } from './services/socket.service';
import { NotificationComponent } from './minicomponents/notification/notification.component';
import { Notification, notifications } from './interfaces/notifications';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'Hire';
  user:User;
  notifications_count = 0;

  @ViewChild('sidenav_drawer') menu_sidenav_drawer;
  @ViewChild('notification_sidenav_drawer') notification_sidenav_drawer;
  @ViewChild('notification_list') notification_list;


  constructor(private router:Router,
    private _userService:UserService,
    private _sockets:SocketService,
    private _snackBar: MatSnackBar
    ){  }


  ngOnInit(){
    this.user = this._userService.getCurrentUser()
    this._sockets.onNotification().subscribe(res => {
      this.notify(<Notification>res)
    })
  }
  updateNotificationCount(event){
    this.notifications_count = event
  }
  notify(notification) {
    //this.userNotifications.push(notification)
    let notif_comp = this._snackBar.openFromComponent(NotificationComponent, {
      data:{
        notification: notification
      },
      duration: 240000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
    notif_comp.instance.closeEvent.subscribe(event => {
      notif_comp.dismiss()
    })
  }
  getNotifications(){
    this.notification_sidenav_drawer.toggle()
  }
  connectUser(){
    this.user = this._userService.getCurrentUser()

    //Tell the server that I'm connected
    this._sockets.socket.emit('new_connection', this.user)

    if(this.menu_sidenav_drawer){
      this.menu_sidenav_drawer.toggle()
    }
    this.router.navigate(['/home']);
  }
  disconnect(){
    this._sockets.socket.emit('disconnection', this.user)
    this._userService.disconnect()
    this.user = null
    this.router.navigate(['/login']);
  }
}
