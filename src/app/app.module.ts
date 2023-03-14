import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { CompanyComponent } from './modules/company/pages/company/company.component';
import { DivisionComponent } from './modules/division/pages/division/division.component';
import { UserComponent } from './modules/user/pages/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CompanyComponent,
    DivisionComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
