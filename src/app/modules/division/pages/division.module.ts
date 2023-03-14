import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisionRoutingModule } from './division-routing.module';
import { DivisionComponent } from './division/division.component';
import { DivisionCreateComponent } from './division-create/division-create.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [DivisionComponent, DivisionCreateComponent],
  imports: [
    CommonModule,
    DivisionRoutingModule,
    RouterModule
  ]
})
export class DivisionModule { }
