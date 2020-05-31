import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../interfaces/questions';
import { SERVER_URL } from './post.service';
import { map } from 'rxjs/operators';

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

  getTopicQuestions(topic){

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

}
