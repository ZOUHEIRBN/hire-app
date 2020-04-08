import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { User } from './interfaces/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { notifications } from './interfaces/notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  title = 'Hire';
  @Input() searchbarValue:string = "";
  @ViewChild('rightPanel') rightPanel;
  @ViewChild('notificationButton') notificationButton;
  @ViewChild('exploreSubmenu') exploreSubmenu;
  rightPanelContent = 'none';
  searchPanel = false;
  showMenu = false;
  user:User = null;
  userNotifications = [];
  constructor(private _userService:UserService, private router:Router){
    if(!this.user){
      //router.navigate(['/login']);
      // alert('You must connect to access this page')
    }
   }
  toggleSearchPanel(){
    this.searchPanel = !this.searchPanel;
  }
  toggleRightPanel(content){
    this.showMenu = false;
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
  toggleMenu(){
    this.rightPanelContent = 'none';
    this.showMenu = !this.showMenu;
  }
  toggleSelector(event: any){
    var target = event.target;
    while(target.tagName !== "BUTTON"){
      target = target.parentNode;
    }
    var target_current = target.getAttribute('current');
    if(target_current !== "true")
    {
      // Look for the one with current=true
       var old_current = document.querySelector('[current]');
       if(old_current !== null){
        old_current.removeAttribute("current");
        old_current.removeAttribute("currentWrapper");
       }

       //Set new current
       setTimeout(() => {
        target.setAttribute("current", "");
       }, 100);
       if(target.parentNode.className !== 'menuButton'){
        this.showMenu = !this.showMenu;
       }
    }
  }
  clearMenuCurrent(event: any){
    var target = event.target;

    while(target.tagName !== "BUTTON"){
      target = target.parentNode;
    }
    var target_current = target.getAttribute('currentWrapper');
    if(target_current !== null){
      target.removeAttribute("currentWrapper");
    }
    else if(target_current !== "true")
    {
      // Look for the one with currentWrapper=true
      var old_current_wrp = document.querySelector('[currentWrapper]');
      if(old_current_wrp !== null){
        old_current_wrp.removeAttribute("currentWrapper");
      }

      // Look for the one with current=true
      var old_current = document.querySelector('[current]');
      if(old_current !== null){
        old_current.removeAttribute("current");
      }

      if(target.parentNode.className !== 'menuButton'){
        this.showMenu = !this.showMenu;
       }

      //Set new currentWrapper
      target.setAttribute("currentWrapper", "");
       //Set new current
      target = event.target;
      while(target.parentNode.className !== "menuButton"){
        target = target.parentNode;
      }
      target.setAttribute("current", "");
    }
  }
  setCurrentUser(userData){
    this.user = userData;
  }
  search(){
    //HTTP Get 'localhost:3000?q='+this.searchbarValue
  }
  ngOnInit(){
    this._userService._user$
      .subscribe(
        response => {
          if(response !== null && response["id"] !== null && response["password"] !== null){
              this.user = response;
              this.router.navigate(['/offers']);
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
    this.showMenu = false;
    this.user = null;
    this.router.navigate(['/login']);
  }
}
