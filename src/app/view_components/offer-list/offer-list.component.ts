import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';



@Component({
  selector: 'hire-offers',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css'],
})




export class OfferListComponent implements OnInit {
  offers: Post[] = [];
  loading_state = true


  constructor(private _postService:PostService) {}

  ngOnInit(): void {
    this._postService.getPostsByType('offer').subscribe(response => {
      this.offers = response
    })
  }

}
