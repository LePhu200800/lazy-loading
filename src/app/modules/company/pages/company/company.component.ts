import { Component } from '@angular/core';

export interface Company {
  id: number;
  name: string;
  address: string;
}

const initialData: Company[] = [
  {id: 1, name: 'Hitachi Vantara Viet Nam', address: "TP.HCM"},
  {id: 2, name: 'TMA Solution', address: "TP.HCM"},
  {id: 3, name: 'FPT SoftWare', address: "TP.HCM"},
];
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  displayedColumns: string[] = ['id', 'name', 'address',  'actions'];
  dataSource = initialData;
  onRowClicked(row: any) {
    console.log('Row clicked: ', row);
}
}
