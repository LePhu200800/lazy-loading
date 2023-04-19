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

    on(loadCompaniesSuccess, (state, { companies}) => {
        return {
            ...state,
            dataCompany: companies,
            error: null,
            status: 'success'
        }       
    }),
    on(loadCompaniesFailure, (state, {error}) =>{
        return {
            ...state,
        status: 'error',
        error: error
        }
    }),
    on(createCompany, (state) => {
        return {
            ...state,
            status: "loading"
        }
    }),
    on(createCompanySuccess, (state, {contentCompany}) => {
        return {
            ...state,
            company: contentCompany,
            status: 'success',
        }
    }),
    on(createCompanyFail, (state, {error}) => {
        return {
            ...state,
            status: 'error',
            error: error
        }
    }),
    on(deleteCompany, (state) => {
        return {
            ...state,
            status: 'loading',
        }
    }),
    on(deleteCompanySuccess, (state, {companyId}) => {
        return {
            ...state,
            companyId: companyId,
            status: 'success'
        }
    }),
    on(createCompanyFail, (state, {error}) => {
        return {
            ...state,
            status: 'error',
            error: error
        }
    }),
    on(updateCompany, (state) => {
        return {
            ...state,
            status: 'loading'
        }
    }),
    on(updateCompanySuccess, (state, {contentCompany}) => {
        return {
            ...state,
            company: contentCompany,
            status: 'success'
        }
    }),
    on(updateCompanyFail, (state, {error}) => {
        return {
            ...state,
            status: 'error',
            error: error
        }
    })
)
