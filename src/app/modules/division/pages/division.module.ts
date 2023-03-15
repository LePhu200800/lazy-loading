import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisionRoutingModule } from './division-routing.module';
import { DivisionComponent } from './division/division.component';
import { DivisionCreateComponent } from './division-create/division-create.component';
import { RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [DivisionComponent, DivisionCreateComponent],
  imports: [
    CommonModule,
    DivisionRoutingModule,
    RouterModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
  ]
})
export class DivisionModule { }
