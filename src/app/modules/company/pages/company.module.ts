import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company/company.component';
import { CompanyCreateComponent } from './company-create/company-create.component';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CompanyComponent,
    CompanyCreateComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    RouterModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class CompanyModule { }
