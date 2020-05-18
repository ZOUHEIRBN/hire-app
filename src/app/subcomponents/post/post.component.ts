import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../interfaces/post';
import { develop } from '../../app-animations';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CommentSectionComponent } from 'src/app/minicomponents/comment-section/comment-section.component';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  animations:[develop]
})
export class PostComponent implements OnInit {
  @Input() post:Post;
  bg_image;
  @Input() embed = false;
  constructor(
    private router:Router,
    private _bottomSheet: MatBottomSheet
  ) {
  }

  ngOnInit(): void {
    this.bg_image = this.post.imageUrl
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
  goto(){
    this.router.navigate(['/post/'+this.post.id])
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
  openComments(){
    this._bottomSheet.open(CommentSectionComponent);
  }
}
