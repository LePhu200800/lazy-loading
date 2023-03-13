import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company-page/company.component';
import { CompanyCreateComponent } from './company-detail/create/company-create.component';
import { DashboardComponent } from '../dashboard/dashboard-page/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'company-create',
    component: CompanyCreateComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyRoutingModule { }
