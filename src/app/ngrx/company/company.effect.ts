import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CompanyService } from 'src/app/cores/services/company/company.service';
import { loadCompanies, loadCompaniesSuccess, loadCompaniesFailure } from './company.action';

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
                map((company) => loadCompaniesSuccess({ companies: company })),
                catchError((error) => of(loadCompaniesFailure({error})))
            )
        )
    )
  )
}