import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyListComponent } from './pages/company-list/company-list.component';
import { CreateCompanyComponent } from './pages/create-company/create-company.component';


@NgModule({
  declarations: [
    CreateCompanyComponent,
    CompanyListComponent,
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
  ]
})
export class CompanyModule { }
