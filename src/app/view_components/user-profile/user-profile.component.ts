import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { PostService } from '../../services/post.service';
import { develop, developDown } from '../../app-animations';
import { PostFilterComponent } from '../../minicomponents/post-filter/post-filter.component';
import { CompanyService } from 'src/app/services/company.service';
import { ResumeService } from 'src/app/services/resume.service';
import { User } from 'src/app/interfaces/user';
import { Resume } from 'src/app/interfaces/resume';



@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations:[develop, developDown]
})
export class UserProfileComponent implements OnInit {
  user:User;
  userposts: any;
  usercompanies: any[];
  @ViewChild(PostFilterComponent)
  postfilter:PostFilterComponent;
  @ViewChild(PostFilterComponent)
  companyfilter:PostFilterComponent;
  loading_state = false;
  currentUserId:string = ''

  constructor(private route: ActivatedRoute,
      private _userService:UserService,
      private _companyService:CompanyService,
      private _postService:PostService,
      private _resumeService:ResumeService
    ) {  }



  ngOnInit(): void {
    //Getting user posts
    if(this._userService.getCurrentUser()){
      this.currentUserId = this._userService.getCurrentUser().id
    }
    this.getProfileOwner();
  }
  getProfileOwner(){
    this.route.params.subscribe(params => {
      this._userService.getUserByEmail(params.email).subscribe(response => {
        this.user = <User>response
        this.refreshData();
      })

    });
  }
  refreshData(){
    this._postService.getUserPosts(this.user.id).subscribe((data) => {
      this.userposts = data
      setTimeout(() => {this.postfilter.refreshFilters(this.userposts)}, 1000)
    })
    this._companyService.getUserCompanies(this.user.id).subscribe((data) => {
      this.usercompanies = data
      setTimeout(() => {this.companyfilter.refreshFilters(this.usercompanies)}, 1000)
    })
  }
  editAndSave(target){
    if(target.editMode){
      console.log(target.resume)
      this._resumeService.putResume(this.user.id, target.resume).subscribe(res => {
        console.log(res)
        //this.user.resume = <Resume>res
      })
    }
    target.editMode = !target.editMode
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
