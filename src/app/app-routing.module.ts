import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import { AuthGuard } from './modules/shared/guards/auth.guard';
import { PermissionGuard } from './modules/shared/guards/permission.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/dashboard/pages/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'company',
    loadChildren: () => import('./modules/company/pages/company.module').then(m => m.CompanyModule),
    canActivate: [PermissionGuard]
  },
  {
    path: 'division',
    loadChildren: () => import('./modules/division/pages/division.module').then(m => m.DivisionModule),
    canActivate: [PermissionGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./modules/user/pages/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    component: PageNotFoundComponent
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
