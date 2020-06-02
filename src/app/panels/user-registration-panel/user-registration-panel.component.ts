import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-registration-panel',
  templateUrl: './user-registration-panel.component.html',
  styleUrls: ['./user-registration-panel.component.css']
})
export class UserRegistrationPanelComponent implements OnInit {
  @Input() user:User = new User();
  @Output() doneEvent = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  updateField(event){
    var target = event.target;
    let key = target.name
    let value = target.value
    this.user[key] = value
  }
  fileSelect(event){
    const reader = new FileReader();
    reader.onload = e => this.user['imageUrl'] = reader.result.toString();
    reader.readAsDataURL(event.target.files[0]);
    console.log(this.user['imageUrl'])

  }


}
