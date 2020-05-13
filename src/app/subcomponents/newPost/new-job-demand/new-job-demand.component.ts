import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'new-job-demand',
  templateUrl: './new-job-demand.component.html',
  styleUrls: ['./new-job-demand.component.css']
})
export class NewJobDemandComponent implements OnInit {
  @Input() newPost;
  floatLabelControl = new FormControl('auto')
  constructor() { }

  ngOnInit(): void {
  }

}
