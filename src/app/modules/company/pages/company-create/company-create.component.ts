import { Component } from '@angular/core';
import {CompanyService} from '../../../../cores/services/company.service'
import {Router, ActivatedRoute, Params} from '@angular/router';


export interface PeriodicElement {
  id: number;
  name: string;
  location: string;
}
@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html',
  styleUrls: ['./company-create.component.css']
})


export class CompanyCreateComponent {
  id:any;
  name:any;
  location: any;

  
  
  constructor(
    private companyService: CompanyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {

    this.companyService.  (this.id).subscribe(res =>{
      this.id =  res.id;
      this.name = res.name;
      this.location = res.location;
    })
 }

 getCompanyId(id: number)
 {
   this.companyService.getCompanyId(id).subscribe(res =>{
     console.log(111, res);
   })
 }


  addOrUpdateCompany(company:PeriodicElement){
    console.log(company)
    this.companyService.add(company);
    this.router.navigate(['/company'])
  }
}
