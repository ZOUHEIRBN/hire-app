import { Component, OnInit, Input } from '@angular/core';
import { Badge } from '../../interfaces/badge';
import { developDown } from 'src/app/app-animations';
import { MatDialog } from '@angular/material/dialog';
import { PromptComponent } from '../prompt/prompt.component';

@Component({
  selector: 'post-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css'],
  animations: [developDown]
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
  constructor(private _dialog:MatDialog) { }

  ngOnInit(): void {
    this.badge.text = this.initialize_text()
    this.icon = this.getIcon()
    this.color = this.getColor()
  }
  initialize_text(){
    if(this.badge.category === 'offer_match'){
      if(this.badge.name === 'Wanted'){
        return "This offer matches "+this.badge.value+"% of your constraints"
      }
      else if(this.badge.name === 'Watchout'){
        return "You have about "+this.badge.value+"% chances that you get selected for this offer"
      }
    }

    else if(this.badge.category === 'demand_match'){
      if(this.badge.name === 'Wanted'){
        return "This demand matches "+this.badge.value+"% of one of your companies' constraints"
      }
      else if(this.badge.name === 'Watchout'){
        return "You have about "+this.badge.value+"% chances that you select the user posting this offer"
      }
    }

    else if(this.badge.category === 'posttype'){
      if(this.badge.name === 'Offer'){
        return 'This is a job offer'
      }
      else if(this.badge.name === 'Demand'){
        return 'This is a job demand'
      }
    }
  }
  getIcon(){
    if(this.badge.category === 'jobtype'){
      return 'work'
    }
    else if(this.badge.category.endsWith('match')){
      if(this.badge.name === 'Wanted'){
        return 'whatshot'
      }
      else if(this.badge.name === 'Watchout'){
        return 'visibility'
      }
    }

    else if(this.badge.category === 'fav'){
      return 'star'
    }
    else if(this.badge.category === 'posttype'){
      if(this.badge.name === 'Offer'){
        return 'assistant_photo'
      }
      else if(this.badge.name === 'Demand'){
        return 'announcement'
      }
    }
    return 'person'
  }
  getColor(){
    if(this.badge.category === 'jobtype'){
      return 'primary'
    }
    else if(this.badge.category.endsWith('match')){
      if(this.badge.name === 'Wanted'){
        return 'secondary'
      }
      else if(this.badge.name === 'Watchout'){
        return 'warn'
      }
    }
    else if(this.badge.category === 'fav'){
      return 'undefined'
    }

    return 'secondary'
  }
  prompt(){
    let dialog = this._dialog.open(PromptComponent, {
      maxHeight: '90vh',
      maxWidth: '90vw',
      data: {
        badge: this.badge,
        actionButtons: ['OK', 'Dismiss']
      }
    })
    dialog.componentInstance.btnClickEvent.subscribe(event => {
      if(event == 'OK'){
        dialog.close()
      }
      else if(event == 'Dismiss'){
        dialog.close()
      }
    })
  }
}
