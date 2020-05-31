import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../interfaces/questions';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { QuestionEditorComponent } from 'src/app/panels/question-editor/question-editor.component';
import { QuizzService } from 'src/app/services/quizz.service';

@Component({
  selector: 'question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  @Input() question:Question
  @Output() deleteEvent = new EventEmitter()
  constructor(private sanitizer:DomSanitizer, private dialog:MatDialog,
    private _userService:UserService, private _quizzService:QuizzService) {
  }

  ngOnInit(): void {
    console.log(this.question)
  }
  sanitize(image){
    return this.sanitizer.bypassSecurityTrustUrl(image)
  }
  editQuestion(){
    let dialog = this.dialog.open(QuestionEditorComponent, {
      data: {
        question: this.question
      }
    })
    dialog.componentInstance.doneEvent.subscribe(_ => {
      this._quizzService.editQuestion(this.question).subscribe(res => {
        console.log(res)
        this.question = <Question>res
        dialog.close()
      })
    })
  }
  deleteQuestion(){
    this._quizzService.deleteQuestion(this.question).subscribe(res => {
      this.deleteEvent.emit(this.question)
    })
  }
}
