import { Component, Input, ViewEncapsulation } from '@angular/core';
import { UserLogin } from './user-thumbnail/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  @Input() title = 'Hire';
  showMenu = false;
  user:UserLogin = null;

  constructor(private _userService:UserService, private router:Router){
    if(!this.user){
      // router.navigate(['/login']);
      // alert('You must connect to access this page')
    }
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

  ngOnInit(){
    this._userService._loginLetPass$
      .subscribe(
        response => {
          if(response !== null){
            if(response["login"] !== null && response["password"] !== null){
              this.user = {"login":response["login"], "password":response["password"]};
              this.router.navigate(['/offers']);
            }
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
