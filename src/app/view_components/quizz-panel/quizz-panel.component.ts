import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { Question } from 'src/app/interfaces/questions';

@Component({
  selector: 'quizz',
  templateUrl: './quizz-panel.component.html',
  styleUrls: ['./quizz-panel.component.css']
})
export class QuizzPanelComponent implements OnInit {
  quizz:Question[] = []
  constructor(private _quizzService:QuizzService) { }

  ngOnInit(): void {
    this._quizzService.getQuestions().subscribe(res => {
      this.quizz = res
    })
  }

}
