import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { User } from '../user-thumbnail/user';
import { UserService } from '../services/user.service';
import { Post } from '../post/post';
import { PostService } from '../services/post.service';
import { developUp, developDown } from '../app-animations';
import { PostFilterComponent } from '../post-filter/post-filter.component';



@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations:[developUp, developDown]
})
export class UserProfileComponent implements OnInit {
  user;
  usertype;
  userposts: Post[];
  @ViewChild(PostFilterComponent)
  filter:PostFilterComponent;
  loading_state = false;
  constructor(private route: ActivatedRoute,private _userService:UserService, private _postService:PostService) {

  }



  ngOnInit(): void {
    //Getting user posts
    this.getProfileOwner();
  }
  async getProfileOwner(){
    this.route.params.subscribe(params => {
      this.usertype = params.usertype;
      if(params.usertype === 'user'){
        this._userService.getUser(params.id)
        .then(response => {this.user = response[0]})
        .then(() => {this.refreshData();})
      }
      else if(params.usertype === 'company'){
        this._userService.getUser(params.id)
        .then(response => {this.user = response[0]})
        .then(() => {this.refreshData();})
      }

    });
  }
  async refreshData(){
    if(this.usertype === 'user'){
      this._postService.getUserPosts(this.user.id)
      .then((response) => {this.userposts = response})
      .then(() => setTimeout(() => {this.filter.refreshFilters(this.userposts)}, 1000))
    }
    else if(this.usertype === 'company'){
      this._postService.getCompanyPosts(this.user.id)
      .then((response) => {this.userposts = response})
      .then(() => setTimeout(() => {this.filter.refreshFilters(this.userposts)}, 1000))
    }
  }


  /* @HostListener("window:scroll", [])
  onScroll(): void {
    if (this.bottomReached()) {
      this.refreshData();
    }
    else{
      this.loading_state = false;
    }
  }
  bottomReached() {
    return (window.innerHeight + window.scrollY) > document.body.offsetHeight*1.75;
  } */
}
