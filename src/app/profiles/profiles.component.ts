import { Component, OnInit } from '@angular/core';
import { User } from '../user-thumbnail/user';
import { UserService } from '../services/user.service';
import { interval } from 'rxjs';


@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  profiles: User[] = [];
  loading_state = true


  constructor(private apiService:UserService) {}

  ngOnInit(): void {
    this.load()

  }
  async load(){
    this.loading_state = true;
    this.apiService.getUsers().subscribe({
      next: (data:User[]) => {
        this.profiles = data;
      }
    });
    setTimeout(() => {
      this.loading_state = false;
    }, 1000);


  }

}
