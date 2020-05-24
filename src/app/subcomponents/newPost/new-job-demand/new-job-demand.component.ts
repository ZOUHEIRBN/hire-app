import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { JobDemand, JobOffer } from 'src/app/interfaces/post';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { Skill } from 'src/app/interfaces/resume';

@Component({
  selector: 'new-job-demand',
  templateUrl: './new-job-demand.component.html',
  styleUrls: ['./new-job-demand.component.css']
})
export class NewJobDemandComponent implements OnInit {
  @Input() newPost:JobDemand;
  @Input() subject:string;
  @Output() loadEvent = new EventEmitter()
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
    this.loadEvent.emit()
    this.newPost = new JobDemand()
    this.newPost.type = 'Demand'
    this.newPost.subject = this.subject
  }

  createPost(){
    this.newPost.ownerId = this._userService.getCurrentUser().email;

    this._postService.createPost(this.newPost).subscribe(_ => {
      //this.posts.unshift(this.newPost)
    })
  }

}
