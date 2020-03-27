import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class OfferService {

  constructor(private httpClient:HttpClient) { }

  public getOffers(){
		return this.httpClient.get(SERVER_URL+"offers");
	}
}
export const SERVER_URL = "http://localhost:3000/";
