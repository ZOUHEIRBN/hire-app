import { Component, Input } from '@angular/core';
import { User } from './user/user';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Hire';
  showMenu = false;
  user:User = null;

  constructor(private _userService:UserService, private router:Router){ }

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
       console.log(old_current);
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
          if(response["login"] !== null && response["password"] !== null){
            this.user = {"login":response["login"], "password":response["password"]};
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
    // this.router.navigate(['/login']);
  }
}
