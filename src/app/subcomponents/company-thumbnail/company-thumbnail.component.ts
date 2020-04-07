/// <reference types="@types/googlemaps" />
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from '../../interfaces/company';

@Component({
  selector: 'company-details',
  templateUrl: './company-thumbnail.component.html',
  styleUrls: ['./company-thumbnail.component.css']
})
export class CompanyThumbnailComponent implements OnInit, AfterViewInit {
  @Input() company: Company;
  @Input() embedded = false;
  @ViewChild('gmap', {static: false}) gmapElement: any;
  map: google.maps.Map;
  mapData;
  lat = 0;
  lng = 0;
  constructor(private router:Router) { }
  gotoCompanyPage(){
    this.router.navigate(['/user/'+this.company.id])
  }
  ngOnInit(): void {
    if(this.company && this.company.address){
      this.lat = this.company.address.latitude;
      this.lng = this.company.address.longitude;
    }

  }
  ngAfterViewInit(){
    this.mapData = {
      center: new google.maps.LatLng(this.lng, this.lat),
      zoom: 12
    };
    this.map = new google.maps.Map(this.gmapElement, this.mapData);

  }
}
