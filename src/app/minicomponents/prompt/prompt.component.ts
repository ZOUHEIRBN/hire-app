import { Component, OnInit, Output, Inject, Input, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Badge } from 'src/app/interfaces/badge';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {
  @Input() prompt
  @Input() actions: string[]
  @Output() btnClickEvent = new EventEmitter()
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }
  ngOnInit(): void {
    if(this.data.message){
      this.prompt = {
        title: this.data.message.title,
        subtitle: '',
        text: this.data.message.body
      }
    }
    else if(this.data.badge){
      this.prompt = {
        title: this.data.badge.name,
        subtitle: this.data.badge.category,
        text: this.data.badge.text
      }
    }
    if(this.data.actionButtons){
      this.actions = this.data.actionButtons
    }
  }

}
