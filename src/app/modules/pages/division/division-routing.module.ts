import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DivisionComponent } from './divison-page/division.component';
import { DivisionCreateComponent } from './division-detail/create/division-create.component';
import { DashboardComponent } from '../dashboard/dashboard-page/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'division',
    component: DivisionComponent
  },
  {
    path: 'create-division',
    component: DivisionCreateComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DivisionRoutingModule { }
