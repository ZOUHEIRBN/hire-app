import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user-thumbnail/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;
  constructor(private route: ActivatedRoute, private _userService:UserService) {
    this.route.params.subscribe(
      //params => console.log(params)
    );
  }

  ngOnInit(): void {
    this.user = {
      "login":"ZouheirBN",
      "password":"banou",
      "first_name":"Zouheir",
      "last_name":"Banou",
      "badges":[{"category":"social","name":"Friends"}, {"category":"jobtype","name":"Chercheur"}]
    };

  }

}
