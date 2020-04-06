import { Component, OnInit, Input, Output } from '@angular/core';
import { Offer } from '../post/post';
import { develop, developUp, developDown } from '../app-animations';

@Component({
  selector: 'offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css'],
  animations:[developDown, develop]
})
export class OfferDetailsComponent implements OnInit {
  @Input() offer: Offer;
  @Output() filter:any[];
  constructor() { }

  ngOnInit(): void {
  }

  toggleFocus(event: any){
    var target = event.target;
    while(target.tagName !== "DIV"){
      target = target.parentNode;
    }
    var shtxt = target.getAttribute('focus');

    if(shtxt === "true")
    {
      target.setAttribute("focus", "false");
    }
    else
    {
      target.setAttribute("focus", "true");
    }
  }
  readMore(event: any){
    var target = event.target;
    while(target.tagName !== "P"){
      target = target.parentNode;
    }
    var shtxt = target.getAttribute('shrink_text');

    if(shtxt === "true")
    {
      target.setAttribute("shrink_text", "false");
    }
    else
    {
      target.setAttribute("shrink_text", "true");
    }
  }
}
