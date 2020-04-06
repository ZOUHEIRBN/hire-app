import { Component, OnInit } from '@angular/core';
import { Offer } from '../post/post';
import { PostService } from '../services/post.service';



@Component({
  selector: 'hire-offers',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css'],
})




export class OfferListComponent implements OnInit {
  offers: Offer[] = [];
  loading_state = true


  constructor(private _postService:PostService) {}

  ngOnInit(): void {
    this.loading_state = true;
    this._postService.getPostsByType('offer')
    .then((response) => {this.offers = response})
    .then(() => setTimeout(() => {this.loading_state = false;}, 1000))

  }
}
