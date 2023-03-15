import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DivisionComponent } from './division/division.component';
import { DivisionCreateComponent } from './division-create/division-create.component';

const routes: Routes = [
  {
    path: '',
    component: DivisionComponent,
  },
  {
    path: 'division-create',
    component: DivisionCreateComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class DivisionRoutingModule {}
