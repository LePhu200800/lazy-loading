import { createReducer, on } from "@ngrx/store";
import { CompanyModel } from "src/app/models/company.model";
import { loadCompanies, loadCompaniesSuccess, loadCompaniesFailure } from "./company.action";

export interface CompanyState {
    company: CompanyModel[];
    error: any;
    status: 'pending'| 'loading' | 'error' | 'success';
}

export const initialState: CompanyState = {
    company: [],
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
            company: companies,
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
    })
)
