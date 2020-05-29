import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { posttypes, def_post } from 'src/app/interfaces/post';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';
import { developDown } from 'src/app/app-animations';
import { I } from '@angular/cdk/keycodes';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'new-post-panel',
  templateUrl: './new-post-panel.component.html',
  styleUrls: ['./new-post-panel.component.css'],
  animations:[ developDown ]
})
export class NewPostPanelComponent implements OnInit {
  @Input() newPost = def_post
  @Output() loadEvent = new EventEmitter()
  @Output() doneEvent = new EventEmitter()

  posttypes = posttypes
  floatLabelControl = new FormControl('auto')
  showcomponent: string;
  constructor(private _userService:UserService, private _postService:PostService) {}

  ngOnInit(): void {

  }
  fileSelect(event){
    const reader = new FileReader();
    reader.onload = _ => this.newPost['imageUrl'] = reader.result;
    reader.readAsDataURL(event.target.files[0]);
  }
  fetchSelectedType(type, subject){
    this.showcomponent = type + subject
  }

}
