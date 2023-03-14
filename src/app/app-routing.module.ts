import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/dashboard/pages/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'company',
    loadChildren: () => import('./modules/company/pages/company.module').then(m => m.CompanyModule)
  },
  {
    path: 'division',
    loadChildren: () => import('./modules/division/pages/division.module').then(m => m.DivisionModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/pages/user.module').then(m => m.UserModule)
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
