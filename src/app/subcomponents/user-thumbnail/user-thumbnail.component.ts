import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { developUp, developDown } from '../../app-animations';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'user-details',
  templateUrl: './user-thumbnail.component.html',
  styleUrls: ['./user-thumbnail.component.css'],
  animations:[developUp, developDown]
})
export class UserThumbnailComponent implements OnInit {
  @Input() user: User;
  @Input() embedded = false;
  @Input() iscurrentuser = false;


  @Output() cogButtonClick = new EventEmitter()

  currentUserId: string;
  constructor(private router:Router, private _userService:UserService) { }
  gotoUserPage(){
    this.router.navigate(['/user/'+this.user.id])
  }
  follow(id){
    this._userService.follow(id).subscribe(res => {
      this.user = res
    })
  }
  ngOnInit(): void {
  }

}
