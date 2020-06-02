import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobOffer, def_post } from 'src/app/interfaces/post';
import { Skill } from 'src/app/interfaces/resume';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

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


  constructor(
    private _userService: UserService,
    private _postService: PostService
    ) { }

  ngOnInit(): void {

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
  createPost(){
    this.newPost.ownerId = this._userService.getCurrentUser().email;

    this._postService.createPost(this.newPost).subscribe(_ => {
      //this.posts.unshift(this.newPost)
    })
  }

}
