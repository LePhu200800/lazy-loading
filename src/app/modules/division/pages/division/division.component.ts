import { Component } from '@angular/core';
export interface Division {
  id: number;
  name: string,
}

const initialData: Division[] = [
  {id: 1, name: "Division1"},
  {id: 2, name: "Division2"},
  {id: 3, name: "Division3"}
]

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent {
  displayedColumns: string[] = ['id', 'name',  'actions'];
  dataSource = initialData
   onRowClicked(row: any) {
    console.log('Row click:', row)
  }
}
