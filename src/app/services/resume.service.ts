import { Injectable } from '@angular/core';
import { Resume, default_resume } from '../interfaces/resume';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private _userService:UserService) { }
  getResume(){
    let user_id = this._userService.getCurrentUser().id
    console.log(user_id)
    return default_resume
  }
}
