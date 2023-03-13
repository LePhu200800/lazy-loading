import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './pages/company-list/company-list.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyListComponent
  },
  // {
  //   path: 'company',
  //   component: CompanyComponent
  // },
  // {
  //   path: 'company-create',
  //   component: CompanyCreateComponent
  // }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CompanyRoutingModule { }
