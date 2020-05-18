import { Component, OnInit, Input } from '@angular/core';
import { Badge } from '../../interfaces/badge';

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
  icon;
  color;
  constructor() { }

  ngOnInit(): void {
    this.icon = this.getIcon()
    this.color = this.getColor()
  }
  getIcon(){
    if(this.badge.category === 'jobtype'){
      return 'work'
    }
    else if(this.badge.category === 'match'){
      return 'whatshot'
    }
    else if(this.badge.category === 'fav'){
      return 'star'
    }
    else if(this.badge.category === 'posttype'){
      return 'assistant_photo'
    }
    return 'person'
  }
  getColor(){
    if(this.badge.category === 'jobtype'){
      return 'primary'
    }
    else if(this.badge.category === 'match'){
      return 'warn'
    }
    else if(this.badge.category === 'fav'){
      return 'undefined'
    }

    return 'secondary'
  }
}
