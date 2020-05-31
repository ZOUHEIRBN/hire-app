import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { Question, Answer } from '../../interfaces/questions';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.css']
})
export class QuestionEditorComponent implements OnInit {
  @Input() question:Question = new Question()
  @Output() doneEvent = new EventEmitter()

  floatLabel = new FormControl('auto')
  readonly separatorKeysCodes: number[] = [13]
  constructor(@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    if(this.data.question){
      this.question = <Question>this.data.question
    }
  }

  new_answer(){
    let ans = new Answer('', false)
    this.question.answers.push(ans)
  }
  add_related_field(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.question.related_fields.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove_related_field(field: string): void {
    const index = this.question.related_fields.indexOf(field);

    if (index >= 0) {
      this.question.related_fields.splice(index, 1);
    }
  }
  submit_question(){
    this.doneEvent.emit(this.question)
  }
}
