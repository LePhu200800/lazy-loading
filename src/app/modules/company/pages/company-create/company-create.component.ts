import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { CompanyService } from 'src/app/cores/services/company/company.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.scss']
})
export class CompanyCreateComponent {

  constructor(
    private companyService: CompanyService,
    private router: Router
  ){}
  companyForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl
  });

  createCompany = () => {
    this.companyService.createCompany(this.companyForm.value).subscribe((res) => {
      this.router.navigate(['/company'])
    });
  }
  
}
