import { Component, OnInit, Input } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'user-details',
  templateUrl: './user-thumbnail.component.html',
  styleUrls: ['./user-thumbnail.component.css']
})
export class UserThumbnailComponent implements OnInit {
  @Input() user: User;
  @Input() embedded = false;
  constructor() { }

  ngOnInit(): void {
  }

}
