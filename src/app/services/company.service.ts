import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SERVER_URL } from './post.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient:HttpClient) { }
  public async getCompany(id){
    var fetchedData = await fetch(SERVER_URL+"companies?id="+id);
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  }
  public getAllCompanies(){
    return this.httpClient.get(SERVER_URL+"companies").pipe(map(response => {
      return response;
    }));
  }

}
