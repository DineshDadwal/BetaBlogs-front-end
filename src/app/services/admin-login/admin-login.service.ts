import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
  url="https://betablogs-backend.herokuapp.com"
 
  constructor(private http:HttpClient) { }

  async adminLogin(formData){
    return this.http.post(`${this.url}/admin/admin`, formData).toPromise();
  }
  
setJwt(token) {
  localStorage.setItem("userToken", token)
}

removeJwt() {
  localStorage.removeItem("userToken")
}

getJwt() {
  let token = localStorage.getItem("userToken");
  if (token) {
    let payload = token.split('.')[1]
    payload = window.atob(payload)
    return JSON.parse(payload);
  }
  else
    return null
}
async updateUser(id,formData){
  return this.http.patch(`${this.url}/userDataTable/updateUser/${id}`, formData).toPromise();
}
}


