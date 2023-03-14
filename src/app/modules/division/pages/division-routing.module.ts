import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DivisionComponent } from './division/division.component';

const routes: Routes = [
  {
    path: '',
    component: DivisionComponent
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
