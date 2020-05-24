import { Injectable } from '@angular/core';
import { Socket, SocketIoConfig } from 'ngx-socket-io'
import { Notification, notifications } from '../interfaces/notifications'
import { SERVER_URL } from './post.service';



@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket:Socket
  socket_config: SocketIoConfig
  notifications:any[]
  constructor() {
    this.socket_config = { url: SERVER_URL, options: {} };
    this.socket_config.options['Access-Control-Allow-Origin'] = '*'


    this.socket = new Socket(this.socket_config)
    this.socket.on('notification', function(notification){
      console.log('New notification:')
      console.log(notification)
    })
  }
  addNotification(notification){
    this.notifications.push(notification)
    console.log(this.notifications)
  }



}
