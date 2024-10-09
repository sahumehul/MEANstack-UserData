import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import User from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:5000";
  httpclient = inject(HttpClient);
  constructor() { }

  getusers(){
    return this.httpclient.get<{data :User[]}>(this.apiUrl + "/getusers")
  }
}
