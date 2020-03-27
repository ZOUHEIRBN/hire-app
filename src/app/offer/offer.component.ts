import { Component, OnInit, NgModule } from '@angular/core';
import { OfferService } from "../services/offer.service";
import { Offer } from './offer';

@Component({
  selector: 'app-home',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})




export class OfferComponent implements OnInit {
  offers: Offer[] = [];
  loading_state = true


  constructor(private apiService:OfferService) {}

  ngOnInit(): void {
    this.loading_state = true;
    this.apiService.getOffers().subscribe((data: any[]) => {
      this.offers = data;
    })
    setTimeout(() => {
      this.loading_state = false;
    }, 1000);
  }





}
