import { Component, OnInit, Input, Inject } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { Post, JobOffer, JobDemand } from 'src/app/interfaces/post';
import { developDown } from 'src/app/app-animations';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
  animations:[developDown]
})
export class PostPageComponent implements OnInit {
  @Input() post;
  days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  floatLabelControl = new FormControl('auto')



  constructor(@Inject(MAT_DIALOG_DATA) public data,
   private sanitizer:DomSanitizer,
   private _postService:PostService) { }



  ngOnInit(): void {
    if(this.data.post){
      this.post = <Post>this.data.post
      if(this.post.subject.toLowerCase() == 'job'){

        if(this.post.type.toLowerCase() == 'offer'){
          this.post = <JobOffer>this.data.post
        }
        else if(this.post.type.toLowerCase() == 'demand'){
          this.post = <JobDemand>this.data.post
        }
      }
      console.log(this.post)

    }
  }
  sanitize(image){
    return this.sanitizer.bypassSecurityTrustUrl(image)
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
  onSelect(event){
    console.log(event)
  }
}
