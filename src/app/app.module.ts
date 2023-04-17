import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store';
import { companyReducer } from './ngrx/company/company.reducer';
import { CompanyEffects } from './ngrx/company/company.effect';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({company: companyReducer}),
    EffectsModule.forRoot([CompanyEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
