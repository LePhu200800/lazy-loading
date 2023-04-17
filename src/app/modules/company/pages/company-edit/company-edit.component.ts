
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/cores/services/company/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  constructor( private companyService: CompanyService, private router: Router, private activeRoute: ActivatedRoute, formBuilder: FormBuilder ){
    this.updateFormCompany = formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      address: ['', Validators.required]
    })
  }

  data!: any;
  id!: number
  updateFormCompany!: FormGroup;

  updateCompany = () => {
    this.companyService.updateCompany(this.updateFormCompany.value).subscribe(res => {
      this.router.navigate(['/company'])
    });
   
  }

  ngOnInit() {
    let queryParams = this.activeRoute.params.subscribe(param => {
      console.log(param)
    })
    console.log(queryParams)
    this.activeRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.companyService.getCompanyById(this.id).subscribe((res) => {
        this.data = res;
        this.updateFormCompany?.get('id')?.setValue(this.data.id);
        this.updateFormCompany?.get('name')?.setValue(this.data.name);
        this.updateFormCompany?.get('address')?.setValue(this.data.address);
      })
    })
  }
}
