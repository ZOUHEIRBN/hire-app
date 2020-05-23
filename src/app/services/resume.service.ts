import { Injectable } from '@angular/core';
import { Resume, default_resume } from '../interfaces/resume';
import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { SERVER_URL, httpOptions } from './post.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private httpClient:HttpClient) { }
  getResume(user_id){
    return this.httpClient.get(SERVER_URL+"users/"+user_id+"/resume/").pipe(map(response => {
      return response['body'];
    }));
  }
  putResume(user_id, resume){
    return this.httpClient.put<Resume>(SERVER_URL+"users/"+user_id+"/resume/", resume, httpOptions)
  }
}
