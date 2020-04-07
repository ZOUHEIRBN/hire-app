import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { User } from '../../interfaces/user';
import { UserService } from '../../services/user.service';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { developUp, developDown } from '../../app-animations';
import { PostFilterComponent } from '../../minicomponents/post-filter/post-filter.component';
import { Observable } from 'rxjs';



@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations:[developUp, developDown]
})
export class UserProfileComponent implements OnInit {
  user;
  usertype;
  userposts: any;
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
      let promise;
      if(params.usertype === 'user'){
        promise = this._userService.getUser(params.id)
      }
      else if(params.usertype === 'company'){
        promise = this._userService.getCompany(params.id)
      }
      promise.then(response => {this.user = response[0]})
      .then(() => {this.refreshData();})

    });
  }
  async refreshData(){
    this._postService.getUserPosts(this.user.id).subscribe((data) => {
      this.userposts = data
      setTimeout(() => {this.filter.refreshFilters(this.userposts)}, 1000)
    })
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
