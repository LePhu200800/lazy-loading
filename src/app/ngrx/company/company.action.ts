import { createAction, props } from "@ngrx/store";
import { CompanyModel } from "src/app/models/company.model";

export const loadCompanies = createAction(
    '[Company] Load Companies'
);

export const loadCompaniesSuccess  = createAction(
    '[Company] Load Companies Success',
    (companies: CompanyModel[]) => ({companies})
);

export const loadCompaniesFailure = createAction(
    '[Company] Load Companies Failure',
    (error: any) => ({error})
);

export const  createCompany = createAction(
    '[Company] Create Company',
    (contentCompany: CompanyModel) => ({contentCompany})
);

export const createCompanySuccess = createAction(
    '[Company] Create Company Success',
    (contentCompany: CompanyModel) => ({contentCompany})
);

export const createCompanyFail = createAction(
    '[Company] Create Company Fail',
    (error: any) => ({error})
);

export const deleteCompany = createAction(
    '[Company] Delete Company',
    (companyId: number) => ({companyId})
)

export const deleteCompanySuccess = createAction(
    '[Company] Delete Company Success',
    (companyId: number) => ({companyId})
)

export const deleteCompanyFail = createAction(
    '[Company] Delete Company Fail',
    (error: any) => ({error})
)

export const updateCompany = createAction(
    '[Company] Update Company',
    (contentCompany: CompanyModel) => ({contentCompany})
)

export const updateCompanySuccess = createAction(
    '[Company] Update Company Success',
    (contentCompany: CompanyModel) => ({contentCompany})
)

export const updateCompanyFail = createAction(
    '[Company] Update Company Fail',
    (error: any) => ({error})
)