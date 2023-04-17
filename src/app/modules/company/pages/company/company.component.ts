import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyService } from 'src/app/cores/services/company/company.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyModel } from 'src/app/models/company.model';
import { MatSort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { selectAll } from 'src/app/ngrx/company/company.selector';
import { loadCompanies } from 'src/app/ngrx/company/company.action';
import { AppState } from 'src/app/ngrx/app.state';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  providers:[CompanyService] 
})

export class CompanyComponent implements OnInit {
  constructor(private companyService: CompanyService, private router: Router, private store: Store<AppState>) {
    this.getData()
  }
  public allCompany$ = this.store.select(selectAll)
  public company = '';
  data!: any[];
  displayedColumns: string[] = ['id', 'name', 'address',  'actions'];
  dataSource!: MatTableDataSource<CompanyModel>
@ViewChild(MatPaginator) paginator!: MatPaginator
@ViewChild(MatSort) sort!: MatSort
getData = () => {
  this.companyService.getDataCompany().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  });
}

deleteCompany = (id: any) => {
  this.companyService.deleteCompany(id).subscribe((res) => {
    this.getData();
  });
}

navigateEdit = (index: any) => {
  this.router.navigate([`company/company-edit/${index}`]);
}

filterData = (e: any) => {
  this.dataSource.filter = e.target.value
}

ngOnInit() {
  this.store.dispatch(loadCompanies())
  this.allCompany$.subscribe(data => {
    console.log(data);
  })
} 
}
