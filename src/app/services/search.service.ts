import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';
import { User } from '../interfaces/user';
import { UserService } from './user.service';
import { CompanyService } from './company.service';
import { PostService, SERVER_URL } from './post.service';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Company } from '../interfaces/company';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults = []
  private _searchWord = new BehaviorSubject<string>('')
  _searchWord$ = this._searchWord.asObservable()
  constructor(
    private httpClient:HttpClient
  ) { }

  public async getSearchResults(q){

    this._searchWord.next(q)
    this._searchWord$.subscribe({
      next: ((data) => {
        this.searchUser(data)
        this.searchCompany(data)
        this.searchPost(data)

        while(this.searchResults.length > 0){
          this.searchResults.splice(0)
        }
      })
    })
    return this.searchResults
  }

  public searchUser(q){
    let userObs = this.httpClient.get(SERVER_URL+"users")
    userObs.subscribe({
      next: ((data: any[]) => {
        data.forEach(e => {
          delete e.password
        })
        data = data.filter(e => {
          return JSON.stringify(e).toLowerCase().includes(q.toLowerCase())
        })
        this.searchResults["users"] = data
      })
    })
  }
  public searchCompany(q){
    let companyObs = this.httpClient.get(SERVER_URL+"companies")
    companyObs.subscribe({
      next: ((data: any[]) => {
        data = data.filter(e => {
          return JSON.stringify(e).toLowerCase().includes(q.toLowerCase())
        })
        this.searchResults["companies"] = data
      })
    })
  }
  public searchPost(q){
    let postObs = this.httpClient.get(SERVER_URL+"posts")
    postObs.subscribe({
      next: ((data: any[]) => {
        data = data.filter(e => {
          return JSON.stringify(e).toLowerCase().includes(q.toLowerCase())
        })
        this.searchResults["posts"] = data
      })
    })
  }

}
