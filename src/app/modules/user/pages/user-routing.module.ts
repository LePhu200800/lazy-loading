import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { UserCreateComponent } from './user-create/user-create.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'user-create',
    component: UserCreateComponent
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UserRoutingModule {}
