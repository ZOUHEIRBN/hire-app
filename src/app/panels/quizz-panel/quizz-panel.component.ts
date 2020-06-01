import { Component, OnInit, Output, EventEmitter, Inject, Input, OnChanges, SimpleChanges } from '@angular/core';
import { QuizzService } from 'src/app/services/quizz.service';
import { Question } from 'src/app/interfaces/questions';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Skill } from 'src/app/interfaces/resume';

@Component({
  selector: 'quizz',
  templateUrl: './quizz-panel.component.html',
  styleUrls: ['./quizz-panel.component.css']
})
export class QuizzPanelComponent implements OnInit {
  @Input() quizz:Question[]
  @Output() doneEvent = new EventEmitter()
  doneStep = false
  constructor(@Inject(MAT_DIALOG_DATA) public data, private _quizzService:QuizzService) { }



  ngOnInit(): void {
    console.log(this.data)
    this._quizzService.getQuizz(<Skill>this.data.skill).subscribe(res => {
      this.quizz = res
      this.doneStep = true
    })
  }
  submit_test(){
    this._quizzService.submitQuizz(this.quizz).subscribe(res => {
      this.doneEvent.emit(res)
    })
  }

}
