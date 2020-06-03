import { Component, OnInit, Output, Inject, Input, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Badge } from 'src/app/interfaces/badge';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {
  @Input() badge:Badge
  @Input() actions: string[]
  @Output() btnClickEvent = new EventEmitter()
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }
  ngOnInit(): void {
    if(this.data.badge){
      this.badge = this.data.badge
    }
    if(this.data.actionButtons){
      this.actions = this.data.actionButtons
    }
  }

}
