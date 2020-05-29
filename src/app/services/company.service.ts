import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SERVER_URL, httpOptions } from './post.service';
import { map } from 'rxjs/operators';
import { Company } from '../interfaces/company';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {


  constructor(private httpClient:HttpClient, private _userService:UserService) { }
  public async getCompany(id){
    var fetchedData = await fetch(SERVER_URL+"companies/"+id);
    var fetchedDataJSON = await fetchedData.json();
    return fetchedDataJSON;
  }
  public getAllCompanies(){
    let current_user = '0'
    if(this._userService.getCurrentUser()){
      current_user = this._userService.getCurrentUser().id
    }
    return this.httpClient.get(SERVER_URL+"companies/?current_user="+current_user).pipe(map(response => {
      return response['body'];
    }));
  }

  public getUserCompanies(ownerId){
    return this.httpClient.get(SERVER_URL+"companies/ownerId/"+ownerId).pipe(map(response => {
      return response['body'];
    }));
  }
  createCompany(company){
    return this.httpClient.post<Company>(SERVER_URL+"companies/", company, httpOptions)
  }
  editCompany(company: Company) {
    return this.httpClient.put<Company>(SERVER_URL+"companies/", company, httpOptions)
  }
  deleteCompany(company: Company) {
    return this.httpClient.delete<Company>(SERVER_URL+"companies/" + company.id, httpOptions)
  }
  follow(company_id, follower){
    return this.httpClient.put<Company>(SERVER_URL+"companies/"+company_id+"/follow", follower)
  }
}
