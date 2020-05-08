import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'user-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  viewMode = true;
  date = new FormControl(new Date());
  @Input() user:User;
  constructor() { }

  ngOnInit(): void {
  }

}
