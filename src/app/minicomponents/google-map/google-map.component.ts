import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'hire-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  @Input() showMap = true;
  @Input() zoom = 17;
  @Input() longitude = -7.534395;
  @Input() latitude = 33.570754;
  @Input() address:string;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  //   let uri_address = this.address.replace(' ', '+')
  //   this.httpClient.get("https://maps.googleapis.com/maps/api/geocode/json?address="+uri_address+"&key=AIzaSyC2pCpXrCKOgMJNl_qyHapgyfVRN2Rc6_Y")
  //   .subscribe(response => {
  //     console.log(response)
  //   })
  }

}
