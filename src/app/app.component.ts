import { Component, Input, ViewEncapsulation, ViewChild } from '@angular/core';
import { UserLogin } from './user-thumbnail/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { notifications } from './notification/notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @Input() title = 'Hire';
  @ViewChild('rightPanel') rightPanel;
  @ViewChild('notificationButton') notificationButton;
  rightPanelContent = 'none';
  showMenu = false;
  user:UserLogin = null;
  userNotifications = [];
  constructor(private _userService:UserService, private router:Router){
    if(!this.user){
      //router.navigate(['/login']);
      // alert('You must connect to access this page')
    }
   }


  toggleRightPanel(content){

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
       }

       //Set new current
       target.setAttribute("current", "");
       this.showMenu = !this.showMenu;

    }


  }

  setCurrentUser(userData){
    this.user = userData;
  }
  ngOnInit(){
    this._userService._user$
      .subscribe(
        response => {
          if(response !== null && response["id"] !== null && response["password"] !== null){
              this.user = {"id":response["id"], "password":response["password"]};
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
