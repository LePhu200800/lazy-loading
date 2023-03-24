import { Component, SimpleChanges } from '@angular/core';
import { CompanyService } from '../../../../cores/services/company.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CompanyInfo, CompanyMode } from 'src/app/cores/models/companyModel';

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
  constructor(
    private companyService: CompanyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.companyInfo.id = this.activatedRoute.snapshot.paramMap.get('id') || null;
  }

  ngOnInit() {
    if (this.companyInfo?.id) {
      this.companyMode = CompanyMode.UPDATE;
      this.getCompanyId(this.companyInfo.id);
    }
  }

  getCompanyId(id: string) {
    this.companyService.getCompanyId(id).subscribe((res: CompanyInfo) => {
      this.companyInfo = res ? res : {};
    })
  }

  addCompany() {
    this.companyService.addCompany(this.companyInfo).subscribe((res: any) => {
      this.router.navigate(['/company']);
    }, (error) => {
      console.log('1111', error);
      // TODO handle error
    });

  }
  editCompany() {
    this.companyService.editCompany(this.companyInfo).subscribe((res: any) => {
      this.router.navigate(['/company']);
    }, (error) => {
      console.log('err2', error);
      // TODO handle error
    });
  }


  addOrUpdateCompany() {
    switch (this.companyMode) {
      case CompanyMode.CREATE:
        this.addCompany();
        break;
      case CompanyMode.UPDATE:
        this.editCompany();
        break;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
}
