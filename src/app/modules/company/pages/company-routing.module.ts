import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { CompanyCreateComponent } from './company-create/company-create.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent
  },
  {
    path: 'create-company',
    component: CompanyCreateComponent
  },
  {
    path: 'edit-company/:id',
    component: CompanyCreateComponent
  },
  
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CompanyRoutingModule { }
