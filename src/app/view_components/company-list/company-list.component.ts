import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../interfaces/user';
import { PostFilterComponent } from '../../minicomponents/post-filter/post-filter.component';
import { UserService } from '../../services/user.service';
import { develop } from 'src/app/app-animations';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CreateCompanyPanelComponent } from 'src/app/panels/create-company-panel/create-company-panel.component';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  animations:[develop]
})
export class CompanyListComponent implements OnInit {
  companies: any[] = [];
  @ViewChild('filter') filter:PostFilterComponent;
  loading_state = true


  constructor(private _router:Router, private _companyService:CompanyService, private _userService:UserService, private _dialog:MatDialog) {}

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

  createCompany(){
    let dialog = this._dialog.open(CreateCompanyPanelComponent, {
      width: '90vw'
    })
    dialog.componentInstance.doneEvent.subscribe(event => {
      this._companyService.createCompany(event).subscribe(res => {
        this.companies.unshift(res)
        dialog.close()
      })
    })
  }
  deleteCompany(event){
    let index = this.companies.indexOf(event)
    if(index > -1){
      this.companies.splice(index, 1)
    }
  }

}
