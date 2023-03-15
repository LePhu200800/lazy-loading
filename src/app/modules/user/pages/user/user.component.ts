import { Component } from '@angular/core';
export interface User {
  id: number;
  name: string,
  gender: string,
  birthday: string;
  phone: string
}

const initialData: User[] = [
  {id: 1, name: "Phu", gender: "Nam", birthday: "20/08/2000", phone: "0337390596"},
  {id: 2, name: "Thien", gender: "Nam", birthday: "20/08/2000", phone: "113"},
  {id: 3, name: "Duong", gender: "Nam", birthday: "20/08/2000", phone: "114"}
]

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  displayedColumns: string[] = ['id', 'name', 'gender', 'birthday', 'phone',  'actions'];
  dataSource = initialData;
  onRowClicked(row:any) {
    console.log('Row click:', row)
  }
}
