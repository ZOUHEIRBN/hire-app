import { Component, OnInit, ViewChild } from '@angular/core';
import { PostFilterComponent } from 'src/app/minicomponents/post-filter/post-filter.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { CompanyService } from 'src/app/services/company.service';
import { PostService } from 'src/app/services/post.service';
import { developDown } from 'src/app/app-animations';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css'],
  animations: [developDown]
})
export class CompanyProfileComponent implements OnInit {
  company;
  companyposts: any;
  @ViewChild(PostFilterComponent)
  filter:PostFilterComponent;
  loading_state = false;
  address = {long: 0, lat: 0}
  currentUserId:string = ''
  constructor(private route: ActivatedRoute, private _userService:UserService, private _companyService:CompanyService, private _postService:PostService) {

  }



  ngOnInit(): void {
    //Getting user posts
    if(this._userService.getCurrentUser()){
      this.currentUserId = this._userService.getCurrentUser().id
    }
    this.getProfileOwner();
  }
  async getProfileOwner(){
    this.route.params.subscribe(params => {
      let promise;
      promise = this._companyService.getCompany(params.id)
      promise.then(response => {
        this.company = response
        this.address['longitude'] = response.address['longitude']
        this.address['latitude'] = response.address['latitude']
      })
      .then(() => {this.refreshData();})

    });
  }
  async refreshData(){
    this._postService.getUserPosts(this.company.id).subscribe((data) => {
      for(let e in data){
        console.log(data[e]['badges'])
      }

      this.companyposts = data
      setTimeout(() => {this.filter.refreshFilters(this.companyposts)}, 1000)
    })
  }

}
