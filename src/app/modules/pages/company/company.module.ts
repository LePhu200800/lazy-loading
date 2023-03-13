import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyCreateComponent } from './company-detail/create/company-create.component';


@NgModule({
  declarations: [
    CompanyCreateComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
  ]
})
export class CompanyModule { }
