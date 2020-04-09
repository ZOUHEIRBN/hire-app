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
  @Input() activate = false;
  @Input() expand = false;
  icon;
  constructor() { }

  ngOnInit(): void {
    this.icon = this.getIcon()
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
  toggleButton(){
    if(this.expand){
      this.activate = !this.activate;
    }
  }

}
