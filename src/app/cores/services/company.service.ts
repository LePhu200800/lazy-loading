import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanyInfo } from '../models/companyModel';

@Injectable({
  providedIn: 'root'
})

export class CompanyService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3000/company";

  getData(): Observable<any> {
    return this.http.get(this.url)
  }

  delete(id: string) {
    this.http.delete(this.url + "/" + id).subscribe();
  }

  addCompany(company: CompanyInfo) {
    return this.http.post(this.url, company);
  }

  editCompany(company: CompanyInfo) {
    return this.http.put(this.url + "/" + company.id, company);
  }

  getCompanyId(id: string): Observable<any> {
    return this.http.get(this.url + "/" + id);
  }
}
