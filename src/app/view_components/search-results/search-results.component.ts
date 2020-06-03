import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CompanyService } from 'src/app/services/company.service';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  searchResults:any[] = [];
  loading_state = false;
  constructor(
    private route:ActivatedRoute,
    private _searchEngine:SearchService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.loading_state = true
      let results = this._searchEngine.getSearchResults(params.q)
      results.then(data => {
        this.searchResults = data
        console.log(data)
        setTimeout(() => {
          this.loading_state = false
        }, 1000);
      })
    })

  }
  async loadSearchResults(q){

  }

}
