import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './modules/pages/dashboard/dashboard-page/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { DivisionComponent } from './modules/pages/division/divison-page/division.component';
import { CompanyComponent } from './modules/pages/company/company-page/company.component';
import { UserComponent } from './modules/pages/user/user-page/user.component';
import { NotFoundComponent } from './modules/pages/not-found/page-not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DivisionComponent,
    CompanyComponent,
    UserComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
