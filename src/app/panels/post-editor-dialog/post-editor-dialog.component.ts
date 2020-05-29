import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'post-editor-dialog',
  templateUrl: './post-editor-dialog.component.html',
  styleUrls: ['./post-editor-dialog.component.css']
})
export class PostEditorDialogComponent implements OnInit {
  post:Post;
  @Output() doneEvent = new EventEmitter()
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    console.log(this.data)
    this.post = this.data.post
  }

}
