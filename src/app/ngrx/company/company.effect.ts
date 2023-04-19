import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CompanyService } from 'src/app/cores/services/company/company.service';
import { loadCompanies, loadCompaniesSuccess, loadCompaniesFailure, createCompany, createCompanySuccess, createCompanyFail, deleteCompany, updateCompany, updateCompanySuccess, updateCompanyFail } from './company.action';

@Injectable()
export class CompanyEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private companyService: CompanyService
  ) {}

  getCompany$ = createEffect(() =>
    this.actions$.pipe(
        ofType(loadCompanies),
        switchMap(() => 
            from(this.companyService.getDataCompany()).pipe(
                map((company) => loadCompaniesSuccess(company)),
                catchError((error) => of(loadCompaniesFailure({error: error})))
            )
        )
    )
  )

  createCompany$ = createEffect(() => 
    this.actions$.pipe(
      ofType(createCompany),
      switchMap((action) => 
        this.companyService.createCompany(action.contentCompany).pipe(
          map((company) => createCompanySuccess(company)),
          catchError((error) => of(createCompanyFail( {error: error})))
        ) 
      )
    )
  )

  deleteCompany$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCompany),
      switchMap((action) => 
        this.companyService.deleteCompany(action.companyId).pipe(
          map((companyId) => createCompanySuccess(companyId)),
          catchError((error) => of(createCompanyFail({error: error})))
        )
      )
    )
  )

  updateCompany$ = createEffect(() => 
    this.actions$.pipe(
      ofType(updateCompany),
      switchMap((action) => 
        this.companyService.updateCompany(action.contentCompany).pipe(
          map((company) => updateCompanySuccess(company)),
          catchError((error) => of(updateCompanyFail({error: error})))
        )
      )
    )
  )
}