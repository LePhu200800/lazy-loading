import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms'
import { CompanyService } from 'src/app/cores/services/company/company.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.state';
import { createCompany } from 'src/app/ngrx/company/company.action';
@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent {

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private store: Store<AppState>
  ){}
  
  dataSource!: [];
  companyForm = new FormGroup({
    id: new FormControl<any>('',[Validators.required]),
    name: new FormControl<any>('',[Validators.required] ),
    address: new FormControl<any>('',[Validators.required])
  });

  createCompany = () => {
    this.store.dispatch(createCompany(this.companyForm.value))
    this.router.navigate(['/company'])
  }

}
