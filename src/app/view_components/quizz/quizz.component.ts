import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { Question } from 'src/app/interfaces/questions';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  quizz:Question[] = []
  constructor(private _quizzService:QuizzService) { }

  ngOnInit(): void {
    this._quizzService.getQuestions().subscribe(res => {
      this.quizz = res
    })
  }

}
