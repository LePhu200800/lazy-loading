import { Component } from '@angular/core';
import { CompanyModel } from '../../../../models/company.model'

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})

export class CompanyComponent {
  initialData: CompanyModel[] = [
    {id: 1, name: 'Hitachi Vantara Viet Nam', address: "TP.HCM"},
    {id: 2, name: 'TMA Solution', address: "TP.HCM"},
    {id: 3, name: 'FPT SoftWare', address: "TP.HCM"},
  ];
  displayedColumns: string[] = ['id', 'name', 'address',  'actions'];
  dataSource = this.initialData;
  onRowClicked(row: any) {
    console.log('Row clicked: ', row);
}
}
