import { Component, Output, EventEmitter, AfterViewInit, Input } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css'],
})
export class NotificationsListComponent implements AfterViewInit {
  @Output() countUpdate = new EventEmitter()
  length = 0;
  @Input() notifications = []
  constructor(private _socketService:SocketService){}
  ngAfterViewInit(){
    this._socketService.onNotification().subscribe(res => {
      this.notifications.push(res)
      this.length++;
      this.countUpdate.emit(this.length)
      if(res.type.toLowerCase() == 'users'){
        //
      }
    })
  }
  markAllAsRead(){
    for(let i=0; i<this.notifications.length; i++){
      if(this.notifications[i].state){
        this.notifications[i].state = false
        this.length--;
      }
    }
    this.countUpdate.emit(this.length)
  }

}
