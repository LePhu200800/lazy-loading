import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CompanyRoutingModule } from '../company/company-routing.module';
import { DivisionRoutingModule } from '../division/division-routing.module';
import { UserRoutingModule } from '../user/user-routing.module';
import { NotFoundRoutingModule } from '../not-found/not-found-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CompanyRoutingModule,
    DivisionRoutingModule,
    UserRoutingModule,
    NotFoundRoutingModule
  ]
})
export class DashboardModule { }
