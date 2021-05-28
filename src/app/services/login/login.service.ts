import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="https://betablogs-backend.herokuapp.com"


  constructor(private http: HttpClient) { }
  async Login(formData){
    return this.http.post(`${this.url}/login/login`,formData).toPromise();
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

}
