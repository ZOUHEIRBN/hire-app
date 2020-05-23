import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserLogin } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'hire-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() user:UserLogin;
  @Output() itemClick = new EventEmitter()
  @Output() userLogged = new EventEmitter()
  selected = ''
  default_user = {'email':'', 'password':''}
  constructor(private _router:Router, private _userService:UserService) { }

  ngOnInit(): void {

  }

  goto(selected){
    this.selected = selected
    this._router.navigate([selected])
    this.itemClick.emit()
  }
  disconnect(){
    //this.showMenu = false;

    this.itemClick.emit()
    this._router.navigate(['/login']);
    this._userService.disconnect()
    this.user = null;
  }
}
