import { Injectable, Output, EventEmitter } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io'
import { Notification, notifications } from '../interfaces/notifications'
import { SERVER_URL } from './post.service';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket:Socket
  socket_config: SocketIoConfig
  private _notifications = new BehaviorSubject<Notification[]>([])
  _notifications$ = this._notifications.asObservable()
  constructor() {
    this.socket_config = { url: SERVER_URL, options: {} };
    this.socket_config.options['Access-Control-Allow-Origin'] = '*'
    this.socket = new Socket(this.socket_config)
  }
  getNotifications(){
    return this._notifications$.pipe(map(res=>{
      return res
    }))
  }
  pushNotification(notification){
    let notification_list = this._notifications.getValue()
    notification_list.push(notification)
    this._notifications.next(notification_list)
  }
  onNotification(){
    return this.socket.fromEvent<Notification>('notification')
  }

}
