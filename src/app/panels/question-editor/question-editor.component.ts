import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../interfaces/resume';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'question-editor',
  templateUrl: './question-editor.component.html',
  styleUrls: ['./question-editor.component.css']
})
export class QuestionEditorComponent implements OnInit {
  @Input() question:Question = new Question()
  floatLabel = new FormControl('auto')
  readonly separatorKeysCodes: number[] = [13]
  constructor() { }

  ngOnInit(): void {

  }
  new_answer(){
    this.question.add_answer('', false)
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
    console.log(this.question)
  }
}
