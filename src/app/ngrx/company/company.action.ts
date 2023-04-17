import { createAction, props } from "@ngrx/store";
import { CompanyModel } from "src/app/models/company.model";

export const loadCompanies = createAction('[Company] Load Companies');

export const loadCompaniesSuccess  = createAction(
    '[Company] Get Company',
    props<{ companies: CompanyModel[] }>()
)

export const loadCompaniesFailure = createAction(
    '[Company] Load Companies Failure',
    props<{ error: any }>()
)
