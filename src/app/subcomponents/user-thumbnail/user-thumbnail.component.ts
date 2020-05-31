import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';
import { developUp, developDown } from '../../app-animations';
import { UserService } from 'src/app/services/user.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


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
  constructor(private sanitizer:DomSanitizer, private router:Router, private _userService:UserService) { }
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
  ngOnInit(): void {
  }

}
