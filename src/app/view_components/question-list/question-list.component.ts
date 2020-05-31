import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { Question } from 'src/app/interfaces/questions';
import { MatDialog } from '@angular/material/dialog';
import { QuestionEditorComponent } from 'src/app/panels/question-editor/question-editor.component';

@Component({
  selector: 'question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions:Question[]
  constructor(private _quizzService: QuizzService, private _dialog:MatDialog) { }

  ngOnInit(): void {
    this._quizzService.getQuestions().subscribe(res => {
      console.log(res)
      this.questions = res
    })
  }
  addQuestion(){
    let dialog = this._dialog.open(QuestionEditorComponent, {
      data: {
        question: new Question()
      }
    })
    dialog.componentInstance.doneEvent.subscribe(res => {
      this._quizzService.addQuestion(res).subscribe(res => {
        this.questions.unshift(res)
        dialog.close()
      })
    })

  }


}
