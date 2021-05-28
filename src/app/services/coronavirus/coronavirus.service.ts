import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronavirusService {
  url="https://betablogs-backend.herokuapp.com"


  constructor(private http:HttpClient) { }
  async getCoronavirusBlogs() {
    return this.http.get(`${this.url}/dashboard/getCoronavirusBlogs`).toPromise()
  }
}
