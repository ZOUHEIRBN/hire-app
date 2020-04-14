import { Component, OnInit, Input } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/interfaces/post';
import { developDown } from 'src/app/app-animations';

@Component({
  selector: 'post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
  animations:[developDown]
})
export class PostPageComponent implements OnInit {
  @Input() post;
  @Input() embed = false;
  post_id;
  constructor(private route:ActivatedRoute, private _postService:PostService) { }

  ngOnInit(): void {
    this.loadPost()
  }
  async loadPost(){
    this.route.params.subscribe(params => {
      if(params.post_id)
      {
        this.post_id = params.post_id;

        let promise = this._postService.getPost(this.post_id)
        promise.then(response => {
          this.post = response
        })
      }
      //else Goto Homepage
    });
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

}
