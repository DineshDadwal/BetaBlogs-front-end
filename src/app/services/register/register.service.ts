import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // url="https://betablogs-backend.herokuapp.com"
  url="https://beta-blog-backend.onrender.com"

  // url = "http://localhost:3000"

  constructor(private http:HttpClient) { }
  
  async Register(formData){
    return this.http.post(`${this.url}/register/register`, formData).toPromise();
  }
  async getOtp(){
    return this.http.get(`${this.url}/register/getOtp`).toPromise();
  }
  async getUserDetails(){
    return this.http.get(`${this.url}/reset/resetData`).toPromise();
  }
  async updateUserDetails(id,formData){
    return this.http.patch(`${this.url}/reset/updateUserPassword/${id}`, formData).toPromise();
  } 
  async reset(formData){
    return this.http.post(`${this.url}/reset/resetPassword`, formData).toPromise();
  }
}
