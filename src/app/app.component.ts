import { Component, Input, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocketService } from './services/socket.service';
import { NotificationComponent } from './minicomponents/notification/notification.component';
import { Notification, notifications } from './interfaces/notifications';
import { NotificationsListComponent } from './minicomponents/notifications-list/notifications-list.component';
import { MatDialog } from '@angular/material/dialog';
import { NewPostPanelComponent } from './panels/new-post-panel/new-post-panel.component';
import { PostService } from './services/post.service';
import { CompanyService } from './services/company.service';
import { CreateCompanyPanelComponent } from './panels/create-company-panel/create-company-panel.component';


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
    private _postService:PostService,
    private _companyService:CompanyService,
    private _sockets:SocketService,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog
    ){  }


  ngOnInit(){
    this.user = this._userService.getCurrentUser()
    if(!this.user){
      this.router.navigate(['/login'])
    }
    this._sockets.onUserConnection().subscribe(res => {
      this._userService.setCurrentUser(<User>res['from'])
      this.user = this._userService.getCurrentUser()
      this.notify(<Notification>res)
    })
    this._sockets.onUserFollowing().subscribe(res => {
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
    if(this.menu_sidenav_drawer && !this.menu_sidenav_drawer){
      this.menu_sidenav_drawer.toggle()
    }
    this.router.navigate(['/connected']);
  }
  disconnect(){
    this._sockets.socket.emit('disconnection', this.user)
    // this._userService.disconnect()
    // this.user = null
    // this.router.navigate(['/login']);
  }

  createPost(){
    let dialog = this._dialog.open(NewPostPanelComponent, {
      width: '90vw',
      maxHeight: '90vh'
    })
    dialog.componentInstance.doneEvent.subscribe(event => {
      console.log(event)
      this._postService.createPost(event).subscribe(_ => {
        //this.posts.unshift(this.newPost)

        dialog.close()
      })
    })
  }


  createCompany(){
    let dialog = this._dialog.open(CreateCompanyPanelComponent, {
      width: '90vw',
      maxHeight: '90vh'
    })
    dialog.componentInstance.doneEvent.subscribe(event => {
      this._companyService.createCompany(event).subscribe(res => {
        this.router.navigate(['/companies'])
        dialog.close()
      })
    })
  }

}
