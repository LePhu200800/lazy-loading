import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  getUser() {
    return of({
      userName: 'User 1',
      permission: 'company'
    })
  }
}
