import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../../interfaces/resume';

@Component({
  selector: 'question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  @Input() question:Question
  constructor() {
    this.question = new Question('What is love?', 1, 'Music')
    this.question.add_answer("Baby don't hurt me", true)
    this.question.add_answer("Don't hurt me", false)
    this.question.add_answer("No more", false)
  }

  ngOnInit(): void {
  }

}
