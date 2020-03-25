import { Component } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hire';
  showMenu = false;

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
}
