import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  // {
  //   path: 'company',
  //   loadChildren: () => import('./../company/company.module').then(m => m.CompanyModule)
  // },
  // {
  //   path: 'user',
  //   loadChildren: () => import('./../user/user.module').then(m => m.UserModule)
  // },
  // {
  //   path: 'division',
  //   component: DivisionComponent
  // },
  // {
  //   path: 'user',
  //   component: UserComponent
  // }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }