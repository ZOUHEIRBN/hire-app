import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { FormControl } from '@angular/forms';
import { Resume } from 'src/app/interfaces/resume';
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
  resume:any;

  constructor(private _resumeService:ResumeService) { }

  ngOnInit(): void {
    this.resume = this._resumeService.getResume()
  }

}
