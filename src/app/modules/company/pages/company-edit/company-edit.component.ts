
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
      id: ['', Validators.required],
      name: ['', Validators.required],
      address: ['', Validators.required]
    })
  }
  disableButton!: true;
  data!: any;
  id!: number
  updateFormCompany!: FormGroup;

  updateCompany = () => {
    this.companyService.updateCompany(this.updateFormCompany.value).subscribe(res => {
      this.router.navigate(['/company'])
    });
   
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id)

      this.companyService.getCompanyById(this.id).subscribe((res) => {
        this.data = res;
        this.updateFormCompany?.get('id')?.setValue(this.data.id);
        this.updateFormCompany?.get('name')?.setValue(this.data.name);
        this.updateFormCompany?.get('address')?.setValue(this.data.address);
      })
    })
  }
}
