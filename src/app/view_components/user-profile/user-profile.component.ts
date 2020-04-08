import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { develop, developDown } from '../../app-animations';
import { PostFilterComponent } from '../../minicomponents/post-filter/post-filter.component';
import { CompanyService } from 'src/app/services/company.service';



@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations:[develop, developDown]
})
export class UserProfileComponent implements OnInit {
  user;
  usertype;
  userposts: any;
  @ViewChild(PostFilterComponent)
  filter:PostFilterComponent;
  loading_state = false;
  constructor(private route: ActivatedRoute, private _userService:UserService, private _companyService:CompanyService, private _postService:PostService) {

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
        promise = this._companyService.getCompany(params.id)
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