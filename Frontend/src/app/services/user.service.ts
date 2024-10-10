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
  getUser(id :string){
    return this.httpclient.get<{data :User}>(this.apiUrl + "/getuser/" + id)
  }
  addusers(model : User){
    return this.httpclient.post(this.apiUrl +"/adduser" , model)
  }
  updateUser(id:string,model:User){
    return this.httpclient.put(this.apiUrl + "/updateuser/" + id,model)
  }
  deleteUser(id:string){
    return this.httpclient.delete(this.apiUrl + "/deleteuser/" + id)
  }
}
