import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
export interface PeriodicElement {
  id: number;
  name: string;
  location: string;
}

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  
  constructor(private http:HttpClient) { }
  url = "http://localhost:3000/company";
  getData(): Observable<any>{
    return this.http.get(this.url)
  }
  delete(id: number){
    this.http.delete(this.url+"/"+id).subscribe((res) =>{
      
    },
    (err:HttpErrorResponse) => {
      console.log(111,err)
   }
    );
  }
  add(company:PeriodicElement){
    this.http.post(this.url, company).subscribe((res) =>{

    },
    (err:HttpErrorResponse) => {
      console.log(111,err)
   }
    );
  }

  edit(company:PeriodicElement){
    this.http.put(this.url+"/"+company.id, company).subscribe((res) =>{

    },
    (err:HttpErrorResponse) => {
      console.log(111,err)
   }
    );
  }

  getCompanyId(id:number): Observable<any>{
    return this.http.get(this.url+"/"+id)
  }
}
