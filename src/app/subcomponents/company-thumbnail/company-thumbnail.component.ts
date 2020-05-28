/// <reference types="@types/googlemaps" />
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../interfaces/company';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'company-details',
  templateUrl: './company-thumbnail.component.html',
  styleUrls: ['./company-thumbnail.component.css']
})
export class CompanyThumbnailComponent implements OnInit, AfterViewInit {
  @Input() company: Company;
  @Input() embedded = false;
  @Input() showMap = true;
  @ViewChild('gmap', {static: false}) gmapElement: any;
  map: google.maps.Map;
  mapData;
  lat = 0;
  lng = 0;
  constructor(private router:Router, private _companyService:CompanyService, private _userService:UserService) { }
  gotoCompanyPage(){
    this.router.navigate(['/user/'+this.company.id])
  }
  ngOnInit(): void {
    console.log(this.company)
    if(this.company && this.company.address){
      this.lat = this.company.address.latitude;
      this.lng = this.company.address.longitude;
    }
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
}
