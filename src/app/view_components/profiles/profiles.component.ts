import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { staggeredDevelop, develop } from '../../app-animations';
import { PostFilterComponent } from '../../minicomponents/post-filter/post-filter.component';



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


  constructor(private _userService:UserService) {}

  ngOnInit(): void {
    this.load()

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
