import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { developUp, developDown } from '../../app-animations';
import { UserService } from 'src/app/services/user.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { UserRegistrationPanelComponent } from 'src/app/panels/user-registration-panel/user-registration-panel.component';


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
  constructor(private sanitizer:DomSanitizer, private router:Router, private _userService:UserService, private _dialog:MatDialog) { }
  gotoUserPage(){
    this.router.navigate(['/user/'+this.user.id])
  }
  sanitize(image){
    return this.sanitizer.bypassSecurityTrustUrl(image)
  }
  follow(id){
    this._userService.follow(id).subscribe(res => {
      this.user = res
    })
  }
  editUser(){
    let dialog = this._dialog.open(UserRegistrationPanelComponent, {
      width: '90vw',
      maxHeight:'90vh',
      data: {
        user: this.user
      }
    })
    dialog.componentInstance.doneEvent.subscribe(event => {
      dialog.close()
      this._userService.editUser(event).subscribe(res => {
        res.dateOfBirth = new Date(res.dateOfBirth)
        this.user = <User>res
      })
    })

  }
  ngOnInit(): void {

  }

}
