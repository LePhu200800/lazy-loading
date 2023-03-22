import { Component } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
   initialData: UserModel[] = [
    {id: 1, name: "Phu", gender: "Nam", birthday: "20/08/2000", phone: "0337390596"},
    {id: 2, name: "Thien", gender: "Nam", birthday: "20/08/2000", phone: "113"},
    {id: 3, name: "Duong", gender: "Nam", birthday: "20/08/2000", phone: "114"}
  ]
  displayedColumns: string[] = ['id', 'name', 'gender', 'birthday', 'phone',  'actions'];
  dataSource = this.initialData;
  onRowClicked(row:any) {
    console.log('Row click:', row)
  }
}
