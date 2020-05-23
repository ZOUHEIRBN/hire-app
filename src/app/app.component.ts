import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { notifications } from './interfaces/notifications';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'Hire';
  @Input() searchbarValue:string = "";
  @ViewChild('sidenav_drawer') menu_sidenav_drawer;
  @ViewChild('notification_sidenav_drawer') notification_sidenav_drawer;

  rightPanelContent = 'none';
  searchPanel = false;
  user:User = null;
  userNotifications: any[] = [];
  constructor(private _userService:UserService, private router:Router, private _searchEngine:SearchService){
    if(!this.user){
      //router.navigate(['/login']);
      // alert('You must connect to access this page')
    }
   }
  toggleSearchPanel(){
    if(!this.searchPanel){
      this.searchPanel = !this.searchPanel;
    }
    else if(this.searchbarValue === ''){
      this.searchPanel = !this.searchPanel;
    }
    else{
      this.search();
    }
  }
  toggleRightPanel(content){
    //this.showMenu = false;
    if(this.rightPanelContent+'' !== content+''){
      this.rightPanelContent = 'none';
      this.userNotifications = [];
      setTimeout(() => {
        this.rightPanelContent = content;

        //if notifications
        this.getUserNotifications()
      }, 400);
    }
    else{
      this.rightPanelContent = 'none'
    }
  }
  getUserNotifications(){
    let i = 0;
      let interval = setInterval(() => {
        this.userNotifications.push(notifications[i]);
        i++;
        if(i >= notifications.length){
          clearInterval(interval);
        }
      }, 100);
  }

  setCurrentUser(userData){
    this.user = userData;
  }
  search(){
    //HTTP Get 'localhost:3000?q='+this.searchbarValue
    this.router.navigate(['/search/'+this.searchbarValue])
  }
  ngOnInit(){
    this.getUserNotifications()
    this._userService._user$
      .subscribe(
        response => {
          if(response !== null && response["id"] !== null && response["password"] !== null){
              this.user = response;
              this.getUserNotifications()
              this.router.navigate(['/home']);
            }
          }

      )
  }
  ngOnDestroy(){
    if (this._userService != null) {
      //
    }
  }
  disconnect(){
    //this.showMenu = false;
    this.user = null;
    this._userService.disconnect()
    this.router.navigate(['/login']);
  }
}
