import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { staggeredDevelop, develop } from '../../app-animations';
import { PostFilterComponent } from '../../minicomponents/post-filter/post-filter.component';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css'],
  animations:[staggeredDevelop, develop]
})
export class ProfilesComponent implements OnInit {
  profiles: any = [];
  @ViewChild('filter') filter:PostFilterComponent;
  loading_state = true
  currentUserId:string = "";

  constructor(private _userService:UserService) {}

  ngOnInit(): void {
    this.load()
    if(this._userService.getCurrentUser()){
      this.currentUserId = this._userService.getCurrentUser().id
    }

  }
  load(){
    this.loading_state = true;
    this._userService.getAllUsers().subscribe((data) => {
      this.profiles = data
      setTimeout(() => {
        this.filter.refreshProfileFilters(this.profiles)
        this.loading_state = false;
      }, 1000)
    })
  }

}
