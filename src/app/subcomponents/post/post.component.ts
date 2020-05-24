import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post, JobOffer, JobDemand } from '../../interfaces/post';
import { develop } from '../../app-animations';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { CommentSectionComponent } from 'src/app/minicomponents/comment-section/comment-section.component';
import { MatDialog } from '@angular/material/dialog';
import { NewPostPanelComponent } from '../newPost/new-post-panel/new-post-panel.component';
import { NewJobDemandComponent } from '../newPost/new-job-demand/new-job-demand.component';
import { NewJobOfferComponent } from '../newPost/new-job-offer/new-job-offer.component';

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

  @Output() postDelete = new EventEmitter()

  constructor(
    private router:Router,
    private _postService:PostService,
    private _bottomSheet: MatBottomSheet,
    private dialog:MatDialog
  ) {
  }

  ngOnInit(): void {
    if(typeof this.post.imageUrl === 'string'){
      //console.log(this.post.imageUrl)
    }
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
    this._bottomSheet.open(CommentSectionComponent, {
      data: { comments: this.post.comments, post_id: this.post.id },
    });
  }
  deletePost(){
    this._postService.deletePost(this.post).subscribe(response => {
      console.log(response)
      this.postDelete.emit(response)
    })
  }
  editPost(){
    if(this.post.type.toLowerCase() == 'demand' && ['job', 'internship'].includes(this.post.subject.toLowerCase())){
      const dialogRef = this.dialog.open(NewJobDemandComponent, {
        width: '50vmin',
      });
      dialogRef.componentInstance.newPost = <JobDemand>this.post
    }
    else if(this.post.type.toLowerCase() == 'offer' && ['job', 'internship'].includes(this.post.subject.toLowerCase())){
      const dialogRef = this.dialog.open(NewJobOfferComponent, {
        width: '50vmin',
      });
      dialogRef.componentInstance.newPost = <JobOffer>this.post
    }
    /* dialogRef.componentInstance.userLogin.subscribe(_ => {
      dialogRef.close()
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }); */
  }
}
