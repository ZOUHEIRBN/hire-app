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
  profiles: User[] = [];
  @ViewChild('filter') filter:PostFilterComponent;
  loading_state = true


  constructor(private apiService:UserService) {}

  ngOnInit(): void {
    this.load()

  }
  async load(){
    this.loading_state = true;
    this.apiService.getAllUsers()
    .then((response) => {this.profiles = response})
    .then(() => setTimeout(() => {
      this.filter.refreshProfileFilters(this.profiles)
      this.loading_state = false;
    }, 1000));
  }

}
