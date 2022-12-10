import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class AboutService {
  url="https://beta-blog-backend.onrender.com"
  // url="http://localhost:3000"
  constructor(private http:HttpClient) { }
  async About(formData){
    return this.http.post(`${this.url}/about/about`, formData).toPromise();
}
async message(formData){
  return this.http.post(`${this.url}/message/message`, formData).toPromise();
}

async postviews(formData){
  return this.http.post(`${this.url}/message/views`, formData).toPromise();
}
async getMessage(){
  return this.http.get(`${this.url}/message/getMessage`).toPromise();
}

async getNumberOfBlogs() {
  return this.http.get(`${this.url}/dashboard/getCount`).toPromise()
}
async getNumberOfUsers(){
  return this.http.get(`${this.url}/register/getCount`).toPromise();
  
}

getMale(){
  return this.http.get(`${this.url}/register/getGenderCount`)
}

}