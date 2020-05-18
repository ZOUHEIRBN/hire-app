import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobOffer } from 'src/app/interfaces/post';
import { Skill } from 'src/app/interfaces/resume';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'new-job-offer',
  templateUrl: './new-job-offer.component.html',
  styleUrls: ['./new-job-offer.component.css']
})
export class NewJobOfferComponent implements OnInit {
  @Input() newPost:JobOffer;
  @Input() type:string;
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
    this.newPost = new JobOffer()
    this.newPost.type = this.type
    this.newPost.subject = 'Offer'
  }
  add(event){
    const input = event.input;
    const value = event.value;
    if(!this.skills.includes(value)){
      this.skills.push(value)
    }
    // Add our skill
    if ((value || '').trim()) {
      const index = this.skills.indexOf((value || '').trim());
      if (index >= 0) {
        this.skills.splice(index, 1);
      }
      let s = new Skill()
      s.skill = value.trim()
      this.newPost.requiredSkills.push(s);

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.skillCtrl.setValue(null);
  }
  remove(skill){
    const index = this.newPost.requiredSkills.indexOf(skill);
    this.skills.push(skill.skill)
    if (index >= 0) {
      this.newPost.requiredSkills.splice(index, 1);
    }
  }
  selected(event) {
    let s = new Skill()
    s.skill = event.option.viewValue
    this.newPost.requiredSkills.push(s);
    this.skillInput.nativeElement.value = '';
    this.skillCtrl.setValue(null);

    console.log(this.newPost.requiredSkills)
  }
  createPost(){
    this.newPost.ownerId = this._userService.getCurrentUser().email;

    this._postService.createPost(this.newPost).subscribe(_ => {
      //this.posts.unshift(this.newPost)
    })
  }

}
