import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisionRoutingModule } from './division-routing.module';
import { DivisionCreateComponent } from './division-detail/create/division-create.component';

@NgModule({
  declarations: [
    DivisionCreateComponent
  ],
  imports: [
    CommonModule,
    DivisionRoutingModule
  ]
})
export class DivisionModule { }
