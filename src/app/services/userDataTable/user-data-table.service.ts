import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserDataTableService {

  constructor(private http:HttpClient) { }
  url= 'http://localhost:3000';
  async getUser() {
    return this.http.get(`${this.url}/userDataTable/getUser`).toPromise();
  }

  async deleteUser(id){
    return this.http.delete(`${this.url}/userDataTable/deleteUser/${id}`).toPromise();
  }

  async updateUser(id,formData){
    return this.http.patch(`${this.url}/userDataTable/updateUser/${id}`, formData).toPromise();
  }

  async getSpecificUser(id){
    return this.http.get(`${this.url}/userDataTable/getSpecificUser/${id}`).toPromise();
  }

}
