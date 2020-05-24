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
import { PostEditorDialogComponent } from 'src/app/subcomponents/newPost/post-editor-dialog/post-editor-dialog.component';
import { UserService } from 'src/app/services/user.service';

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
    private _userService:UserService,
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
      this.postDelete.emit(this.post)
    })
  }
  editPost(){
    const dialogRef = this.dialog.open(PostEditorDialogComponent, {
      maxHeight: '90vmin',
      data:{
        post: this.post
      }
    });
    dialogRef.componentInstance.doneEvent.subscribe(event => {
      event['ownerId'] = this._userService.getCurrentUser().id
      event['comments'] = this.post.comments
      this._postService.editPost(event).subscribe(response => {
        this.post = <Post>response
        dialogRef.close()
      })
    })
    /* dialogRef.componentInstance.userLogin.subscribe(_ => {
      dialogRef.close()
    })
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    }); */
  }
}
