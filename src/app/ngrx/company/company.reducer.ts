import { createReducer, on } from "@ngrx/store";
import { CompanyModel } from "src/app/models/company.model";
import { loadCompanies, loadCompaniesSuccess, loadCompaniesFailure, createCompany, createCompanySuccess, createCompanyFail, deleteCompany, deleteCompanySuccess, updateCompany, updateCompanySuccess, updateCompanyFail } from "./company.action";

export interface CompanyState {
    dataCompany: CompanyModel[];
    company: any;
    companyId: any; 
    error: any;
    status: 'pending'| 'loading' | 'error' | 'success';
}

export const initialState: CompanyState = {
    dataCompany: [],
    companyId: null,
    company: null,
    error: null,
    status: 'pending'
}

export const companyReducer = createReducer(
    initialState,
    on(loadCompanies, (state) => {
        return {
            ...state,
        error: null,
        status: "pending"
        }
    }),

    on(loadCompaniesSuccess, (state, action) => {
        return {
            ...state,
            dataCompany: action.companies,
            error: null,
            status: 'success'
        }       
    }),
    on(loadCompaniesFailure, (state, action) =>{
        return {
            ...state,
        status: 'error',
        error: action.error
        }
    }),
    on(createCompany, (state) => {
        return {
            ...state,
            status: "loading"
        }
    }),
    on(createCompanySuccess, (state, action) => {
        return {
            ...state,
            company: action.contentCompany,
            status: 'success',
        }
    }),
    on(createCompanyFail, (state, action) => {
        return {
            ...state,
            status: 'error',
            error: action.error
        }
    }),
    on(deleteCompany, (state) => {
        return {
            ...state,
            status: 'loading',
        }
    }),
    on(deleteCompanySuccess, (state, action) => {
        return {
            ...state,
            companyId: action.companyId,
            status: 'success'
        }
    }),
    on(createCompanyFail, (state, action) => {
        return {
            ...state,
            status: 'error',
            error: action.error
        }
    }),
    on(updateCompany, (state) => {
        return {
            ...state,
            status: 'loading'
        }
    }),
    on(updateCompanySuccess, (state, action) => {
        return {
            ...state,
            company: action.contentCompany,
            status: 'success'
        }
    }),
    on(updateCompanyFail, (state, action) => {
        return {
            ...state,
            status: 'error',
            error: action.error
        }
    })
)
