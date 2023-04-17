import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CompanyState } from "./company.reducer";

export const selectCompany = (state: AppState) => state.company;
export const selectAll = createSelector(
    selectCompany,
    (state: CompanyState) => state
    
);

