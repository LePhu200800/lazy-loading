import { Component } from '@angular/core';
import { DivisionModel } from 'src/app/models/division.model';



@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent {
  initialData: DivisionModel[] = [
    {id: 1, name: "Division1"},
    {id: 2, name: "Division2"},
    {id: 3, name: "Division3"}
  ]
  displayedColumns: string[] = ['id', 'name',  'actions'];
  dataSource = this.initialData
   onRowClicked(row: any) {
    console.log('Row click:', row)
  }
}
