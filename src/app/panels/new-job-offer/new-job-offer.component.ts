import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobOffer, def_post, CITIES, FUNCTIONS, HIERARCHY_LVS, DIPLOMA_TYPES } from 'src/app/interfaces/post';
import { Skill, Degree } from 'src/app/interfaces/resume';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'new-job-offer',
  templateUrl: './new-job-offer.component.html',
  styleUrls: ['./new-job-offer.component.css']
})
export class NewJobOfferComponent implements OnInit {
  @Input() newPost:JobOffer;
  @Input() subject:string;
  @Output() doneEvent = new EventEmitter()

  floatLabelControl = new FormControl('auto')
  skillCtrl = new FormControl();
  @ViewChild('skillInput') skillInput: ElementRef<HTMLInputElement>;

  options = []
  skills = ['Python', 'Java', 'C']
  separatorKeyCodes = [COMMA, ENTER]
  cities = CITIES
  functions = FUNCTIONS
  hierarchy_levels = HIERARCHY_LVS
  dip_types = DIPLOMA_TYPES
  companies = []


  constructor(
    private _userService: UserService,
    private _postService: PostService,
    private _companyService:CompanyService
    ) { }

  ngOnInit(): void {
    let current_user = this._userService.getCurrentUser()
    if(current_user){
      this._companyService.getUserCompanies(current_user.id).subscribe(res => {
        this.companies = res.map(e => {return {
            title: e['title'],
            id: e['id']
          }
        })
        this.companies.unshift({
          title: current_user['email'],
          id: current_user['id']
        })
      })
    }
    if(!this.newPost || this.newPost === def_post){
      this.newPost = new JobOffer()
      this.newPost.type = 'Offer'
      this.newPost.subject = this.subject
    }
    else{
      this.newPost = JobOffer.fromPost(this.newPost)
    }
  }
  new_skill(){
    let s = new Skill()
    this.newPost.requiredSkills.push(s)
    console.log(this.newPost)
  }
  new_degree(){
    let d = new Degree()
    this.newPost.requiredDegrees.push(d)
    console.log(this.newPost)
  }
  new_exp(){
    let e =  {title: '', level: 0}
    this.newPost.requiredExp.push(e)
    console.log(this.newPost)
  }

}
