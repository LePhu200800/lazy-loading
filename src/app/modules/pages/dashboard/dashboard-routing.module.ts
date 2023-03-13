import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard-page/dashboard.component';
import { CompanyComponent } from '../company/company-page/company.component';
import { DivisionComponent } from '../division/divison-page/division.component';
import { UserComponent } from '../user/user-page/user.component';

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
    path: 'division',
    component: DivisionComponent
  },
  {
    path: 'user',
    component: UserComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }
