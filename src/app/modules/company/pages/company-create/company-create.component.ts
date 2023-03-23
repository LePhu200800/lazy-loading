import { Component, SimpleChanges } from '@angular/core';
import {CompanyService} from '../../../../cores/services/company.service'
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


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
  editOrCreate: string | undefined;
  checkCreateOrEdit: boolean | undefined;
  isExist: boolean | undefined;
  constructor(
    private companyService: CompanyService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){

    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.companyService.getCompanyId(this.id).subscribe(res =>{
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
    this.companyService.getCompanyId(this.id).subscribe(res =>{
      if(res){
        this.companyService.edit(company);
        console.log('edit')
      }
    },
    (err:HttpErrorResponse) => {
      if(err){
        this.companyService.add(company);
        console.log('add')
      }
    }
    )
    this.router.navigate(['/company'])
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }
}
