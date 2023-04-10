import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/cores/services/company/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {
  constructor(
    private companyService: CompanyService,
    private router: Router,
  ){}
  dataSource = [];
  companyForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    address: new FormControl
  });

  updateCompany = () => {
    console.log('edit', this.companyForm.value)
    this.companyService.updateCompany(this.companyForm.value).subscribe();
    this.router.navigate(['/company'])
  }

  ngOnInit() {
    console.log("ahihi")
  }
}
