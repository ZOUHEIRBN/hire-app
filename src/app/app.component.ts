import { Component, Input, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocketService } from './services/socket.service';
import { NotificationComponent } from './minicomponents/notification/notification.component';
import { Notification, notifications } from './interfaces/notifications';
import { NotificationsListComponent } from './notifications-list/notifications-list.component';


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

  @ViewChild('menu_sidenav_drawer') menu_sidenav_drawer;
  @ViewChild('notification_sidenav_drawer') notification_sidenav_drawer;
  @ViewChild('notification_list') notification_list;


  constructor(private router:Router,
    private _userService:UserService,
    private _sockets:SocketService,
    private _snackBar: MatSnackBar
    ){  }


  ngOnInit(){
    this.user = this._userService.getCurrentUser()
    this._sockets.onUserConnection().subscribe(res => {
      this._userService.setCurrentUser(<User>res['from'])
      this.user = this._userService.getCurrentUser()
      this.notify(<Notification>res)
    })
    this._sockets.onNotification().subscribe(res => {
      this.notify(<Notification>res)
    })
  }
  updateNotificationCount(event){
    console.log(this.notification_list)
    this.notifications_count = event
  }
  notify(notification) {
    //this.userNotifications.push(notification)
    let notif_comp = this._snackBar.openFromComponent(NotificationComponent, {
      data:{
        notification: notification
      },
      duration: 2000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
    notif_comp.instance.closeEvent.subscribe(event => {
      notif_comp.dismiss()
    })
  }
  showNotifications(){
    if(this.menu_sidenav_drawer.opened){
      this.menu_sidenav_drawer.toggle()
    }
    this.notification_sidenav_drawer.toggle()
  }
  showMenu(){
    if(this.notification_sidenav_drawer.opened){
      this.notification_sidenav_drawer.toggle()
    }
    this.menu_sidenav_drawer.toggle()
  }
  connectUser(){
    if(this.menu_sidenav_drawer){
      this.menu_sidenav_drawer.toggle()
    }
    this.router.navigate(['/home']);
  }
  disconnect(){
    this._sockets.socket.emit('user_disconnection', this.user)
    this._userService.disconnect()
    this.user = null
    this.router.navigate(['/login']);
  }
}
