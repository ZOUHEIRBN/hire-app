import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../interfaces/user';
import { PostFilterComponent } from '../../minicomponents/post-filter/post-filter.component';
import { UserService } from '../../services/user.service';
import { develop } from 'src/app/app-animations';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  animations:[develop]
})
export class CompanyListComponent implements OnInit {
  companies: any = [];
  @ViewChild('filter') filter:PostFilterComponent;
  loading_state = true


  constructor(private _companyService:CompanyService, private _userService:UserService) {}

  ngOnInit(): void {
    this.load()

  }
  load(){
    this.loading_state = true;
    this._companyService.getAllCompanies().subscribe((data) => {
      this.companies = data
      setTimeout(() => {
        this.filter.refreshProfileFilters(this.companies)
        this.loading_state = false;
      }, 1000)
    })
  }

}
