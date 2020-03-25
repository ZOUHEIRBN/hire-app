import { Component, OnInit, Input } from '@angular/core';
import { Badge } from './badge';

@Component({
  selector: 'post-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
// const BADGE_DEFAULTS: any = {
//   "jobtype":false,
//   "fav":false,
//   "match":true
// }
export class BadgeComponent implements OnInit {
  @Input() badge: Badge;
  expand = false;
  constructor() { }

  ngOnInit(): void {

  }

  toggleExpand(){
    this.expand = !this.expand;
  }

}
