import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { FormControl } from '@angular/forms';
import { Resume, default_resume } from 'src/app/interfaces/resume';
import { ResumeService } from 'src/app/services/resume.service';

@Component({
  selector: 'user-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  @Input() editMode = false;
  date = new FormControl(new Date());
  @Input() user:User;
  resume:Resume = default_resume;

  constructor(private _resumeService:ResumeService) { }

  ngOnInit(): void {
    this._resumeService.getResume(this.user.id).subscribe(response => {
      this.resume =  response
    })
  }

}
