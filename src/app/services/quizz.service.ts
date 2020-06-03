import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../interfaces/questions';
import { SERVER_URL, httpOptions } from './_server_variables'
import { map } from 'rxjs/operators';
import { Skill } from '../interfaces/resume';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  constructor(private httpClient:HttpClient) { }

  getQuestions(){
    return this.httpClient.get<Question[]>(SERVER_URL + 'questions/').pipe(map(response => {
      return response['body'];
    }));
  }

  addQuestion(question){
    return this.httpClient.post<Question>(SERVER_URL + 'questions/', question)
  }

  editQuestion(question){
    return this.httpClient.put<Question>(SERVER_URL + 'questions/', question)
  }

  deleteQuestion(question){
    return this.httpClient.delete<Question>(SERVER_URL + 'questions/' + question.id)
  }

  //Quizz methods
  getQuizz(skill: Skill){
    return this.httpClient.get<Question[]>(SERVER_URL + 'questions/topic/'+skill.skill).pipe(map(response => {
      response = response['body'];
      response.map(element => {
        element.answers = element.answers.map(ans => {
          return {text: ans.text, correct: false}
        })
      })

      return response
    }));
  }
  submitQuizz(quizz){
    return this.httpClient.post<Question[]>(SERVER_URL + 'questions/quizz/', quizz)
  }

}
