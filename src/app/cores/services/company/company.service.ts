import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CompanyModel } from 'src/app/models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  constructor(private http: HttpClient) {}
  private baseUrl: string = "http://localhost:3000/company"

  getDataCompany(): Observable<any> {
    return this.http.get(this.baseUrl)
  }
  
  createCompany = (company: CompanyModel) => {
  return this.http.post(this.baseUrl, company);
  } 

  deleteCompany = (id: number) => {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  updateCompany = (company: CompanyModel) => {
    return this.http.put(`${this.baseUrl}/${company.id}`, company);
  }
}
