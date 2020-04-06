import { Component, OnInit, Input } from '@angular/core';
import { Notification } from './notifications'
import { develop } from '../app-animations';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  animations:[develop],
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notification:Notification;
  constructor() { }

  ngOnInit(): void {
  }

}
