/// <reference types="@types/googlemaps" />
import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../interfaces/company';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';
import { CreateCompanyPanelComponent } from 'src/app/panels/create-company-panel/create-company-panel.component';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'company-details',
  templateUrl: './company-thumbnail.component.html',
  styleUrls: ['./company-thumbnail.component.css']
})
export class CompanyThumbnailComponent implements OnInit, AfterViewInit {
  @Input() company: Company;
  @Input() embedded = false;
  @Input() showMap = true;
  @Output() deleteEvent = new EventEmitter()
  @ViewChild('gmap', {static: false}) gmapElement: any;
  map: google.maps.Map;
  mapData;
  lat = 0;
  lng = 0;
  constructor(private sanitizer: DomSanitizer, private router:Router, private _companyService:CompanyService, private _userService:UserService, private _dialog:MatDialog) { }
  gotoCompanyPage(){
    this.router.navigate(['/user/'+this.company.id])
  }
  ngOnInit(): void {
    this.company.imageUrl = this.sanitize(this.company.imageUrl) + ''
    if(this.company && this.company.address){
      this.lat = this.company.address.latitude;
      this.lng = this.company.address.longitude;
    }
  }
  sanitize(image){
    return this.sanitizer.bypassSecurityTrustUrl(image)
  }
  follow(){
    this._companyService.follow(this.company.id, this._userService.getCurrentUser()).subscribe(res => {
      this.company = res
    })
  }
  ngAfterViewInit(){
    if(this.showMap){
      this.mapData = {
        center: new google.maps.LatLng(this.lng, this.lat),
        zoom: 12
      };
      this.map = new google.maps.Map(this.gmapElement, this.mapData);
    }
  }
  deleteCompany(){
    this._companyService.deleteCompany(this.company).subscribe(res => {
      this.deleteEvent.emit(this.company)
    })
  }
  editCompany(){
    let dialog = this._dialog.open(CreateCompanyPanelComponent, {
      width: '90vw',
      data: {
        company: this.company
      }
    })
    dialog.componentInstance.doneEvent.subscribe(event => {
      this._companyService.editCompany(event).subscribe(res => {
        this.company = res
        dialog.close()
      })
    })
  }
}
