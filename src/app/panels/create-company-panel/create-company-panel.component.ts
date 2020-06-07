import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Company } from 'src/app/interfaces/company';
import { CompanyService } from 'src/app/services/company.service';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { SECTORS, FUNCTIONS, TECH_CATEGORIES } from 'src/app/interfaces/post';

@Component({
  selector: 'create-company-panel',
  templateUrl: './create-company-panel.component.html',
  styleUrls: ['./create-company-panel.component.css']
})
export class CreateCompanyPanelComponent implements OnInit {
  @Input() company:Company;
  @Output() doneEvent = new EventEmitter()
  floatLabelControl = new FormControl('auto')
  titles = FUNCTIONS
  sectors = SECTORS
  tech_categories = TECH_CATEGORIES
  constructor(@Inject(MAT_DIALOG_DATA) public data, private _userService:UserService) { }

  ngOnInit(): void {
    console.log(this.data)
    if(this.data === undefined || this.data === null){
      this.company = new Company()
    }
    else{
      this.company = this.data.company
    }
  }
  createCompany(){
    this.company.ownerId = this._userService.getCurrentUser().id
    console.log(this.company)
    this.doneEvent.emit(this.company)
  }
}
