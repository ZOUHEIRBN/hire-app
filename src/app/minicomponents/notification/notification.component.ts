import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Notification } from '../../interfaces/notifications'
import { develop } from '../../app-animations';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { useAnimation } from '@angular/animations';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations:[develop],

})
export class NotificationComponent implements OnInit {
  @Input() notification;
  @Output() fireEvent = new EventEmitter()
  @Output() closeEvent = new EventEmitter()
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    private _socketService: SocketService
  ) { }

  ngOnInit(): void {
    this.notification = <Notification>this.data['notification']

    this._socketService.pushNotification(this.notification)

    this.fireEvent.emit()
  }

}
