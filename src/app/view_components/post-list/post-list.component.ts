import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'hire-offers',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})




export class PostListComponent implements OnInit {
  offers: Post[] = [];
  loading_state = true


  constructor(private route:ActivatedRoute,
    private _postService:PostService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let posttype = ''
      if(params.posttype == 'offers'){
        posttype = 'Offer'
      }
      else if(params.posttype == 'demands'){
        posttype = 'Demand'
      }
      this._postService.getPostsByType(posttype).subscribe(response => {
        this.offers = response
      })
    })

  }

}
