import { Component, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css'],
})
export class NotificationsListComponent implements AfterViewInit {
  @Output() countUpdate = new EventEmitter()
  @Input() notifications = {
    "match": [], "watchout":[], "users":[]
  }
  constructor(private _socketService:SocketService){}
  ngAfterViewInit(){
    this._socketService.onNotification().subscribe(res => {
      this.notifications[res.type.toLowerCase()].push(res)
      if(res.type.toLowerCase() == 'users'){
        //
      }
    })
  }
  markCatAsRead(type){
    console.log(type)
    for(let i=0; i<this.notifications[type].length; i++){
      this.notifications[type][i].state = false
    }
  }

}
