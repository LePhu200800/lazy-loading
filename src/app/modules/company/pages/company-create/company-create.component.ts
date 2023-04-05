import { Component, SimpleChanges } from '@angular/core';
import { CompanyService } from '../../../../cores/services/company.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CompanyInfo, CompanyMode } from 'src/app/cores/models/companyModel';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})


export class CompanyCreateComponent {
  companyInfo: CompanyInfo = {};
  companyMode = CompanyMode.CREATE;
  editOrCreate: string | undefined;
  checkCreateOrEdit: boolean | undefined;
  isExist: boolean | undefined;

  companyForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    location: new FormControl(),
  });

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.companyForm.controls.id.setValue(this.activatedRoute.snapshot.paramMap.get('id') || null);
  }

  ngOnInit() {
    if (this.companyForm?.value.id) {
      this.companyMode = CompanyMode.UPDATE;
      this.getCompanyId(this.companyForm.value.id);
    }
  }

  getCompanyId(id: string) {
    this.companyService.getCompanyId(id).subscribe((res: CompanyInfo) => {
      if(res)
      {
        this.companyForm.setValue({id: res.id , name: res.name , location: res.location})
      }
    })
  }

  addCompany() {
    this.companyService.addCompany(this.companyForm.value).subscribe((res: any) => {
      this.router.navigate(['/company']);
    }, (error) => {
      console.log('1111', error);
      // TODO handle error
    });

  }
  editCompany() {
    console.log('edit', this.companyForm.value)
    this.companyService.editCompany(this.companyForm.value).subscribe((res: any) => {
      this.router.navigate(['/company']);
    }, (error) => {
      console.log('err2', error);
      // TODO handle error
    });
  }


  addOrUpdateCompany() {
    console.log(this.companyForm)
    switch (this.companyMode) {
      case CompanyMode.CREATE:
        this.addCompany();
        break;
      case CompanyMode.UPDATE:
        this.editCompany();
        break;
    }
  }


}
