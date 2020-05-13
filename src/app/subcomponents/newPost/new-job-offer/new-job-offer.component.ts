import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'new-job-offer',
  templateUrl: './new-job-offer.component.html',
  styleUrls: ['./new-job-offer.component.css']
})
export class NewJobOfferComponent implements OnInit {
  @Input() newPost;
  floatLabelControl = new FormControl('auto')
  constructor() { }

  ngOnInit(): void {
  }

}
