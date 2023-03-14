import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company/company.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CompanyComponent, CompanyCreateComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    RouterModule
  ]
})
export class CompanyModule { }
