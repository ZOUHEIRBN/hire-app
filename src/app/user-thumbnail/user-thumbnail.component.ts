import { Component, OnInit, Input } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';
import { developUp, developDown } from '../app-animations';

@Component({
  selector: 'user-details',
  templateUrl: './user-thumbnail.component.html',
  styleUrls: ['./user-thumbnail.component.css'],
  animations:[developUp, developDown]
})
export class UserThumbnailComponent implements OnInit {
  @Input() user: User;
  @Input() embedded = false;
  constructor(private router:Router) { }
  gotoUserPage(){
    this.router.navigate(['/user/'+this.user.id])
  }
  ngOnInit(): void {
  }

}