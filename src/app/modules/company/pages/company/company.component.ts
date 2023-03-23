import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {CompanyService} from '../../../../cores/services/company.service';
export interface PeriodicElement {
  id: number;
  name: string;
  location: string;
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  dataSource=[]
  constructor(
    private companyService: CompanyService,
    private router: Router,
    ){
  }

  ngOnInit() {
    this.companyService.getData().subscribe(data => {
      this.dataSource = data;
    })
 }

  displayedColumns: string[] = ['stt', 'name', 'location', 'delete'];
  onRowClicked(row: any) {
    console.log('Row clicked: ', row);
  }
  delete(id: number){
    console.log(id)
    this.companyService.delete(id);
    this.companyService.getData().subscribe(data => {
      this.dataSource = data;
    })
  }



  onNavigate(id: number){
    this.router.navigate([`/company/edit-company/${id}`])
  }

}
