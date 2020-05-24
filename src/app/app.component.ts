import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { notifications } from './interfaces/notifications';
import { SearchService } from './services/search.service';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'Hire';
  user;
  @ViewChild('sidenav_drawer') menu_sidenav_drawer;
  @ViewChild('notification_sidenav_drawer') notification_sidenav_drawer;

  userNotifications: any[] = [];
  constructor(private router:Router,
    private _userService:UserService,
    private _sockets:SocketService,
    ){  }


  ngOnInit(){
    this.user = this._userService.getCurrentUser()
  }
  connectUser(){
    this.user = this._userService.getCurrentUser()
    this._sockets.socket.emit('new_connection', this.user)
    this.router.navigate(['/home']);
    if(this.menu_sidenav_drawer){
      this.menu_sidenav_drawer.toggle()
    }
  }
  disconnect(){
    this._sockets.socket.emit('disconnection', this.user)
    this._userService.disconnect()
    this.router.navigate(['/login']);
  }
}
