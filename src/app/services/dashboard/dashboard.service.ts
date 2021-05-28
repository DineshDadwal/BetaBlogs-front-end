import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url="https://betablogs-backend.herokuapp.com"

  constructor(private http:HttpClient) { }
  async Dashboard(formData){
    return this.http.post(`${this.url}/dashboard/dashboard`, formData).toPromise();
  }
  async getParticularBlogs(id) {
    return this.http.get(`${this.url}/dashboard/getSpecificblog/${id}`).toPromise()
  }
  async get(){
    return this.http.get(`${this.url}/dashboard/getAllBlogs`).toPromise();
  }

  async getCoronavirusBlogs(){
    return this.http.get(`${this.url}/dashboard/getCoronavirusBlogs`).toPromise();
  }
  async getNewsBlogs(){
    return this.http.get(`${this.url}/dashboard/getNewsBlogs`).toPromise();
  }async getEntertainmentBlogs(){
    return this.http.get(`${this.url}/dashboard/getEntertainmentBlogs`).toPromise();
  }async getPoliticsBlogs(){
    return this.http.get(`${this.url}/dashboard/getPoliticsBlogs`).toPromise();
  }async getSportsBlogs(){
    return this.http.get(`${this.url}/dashboard/getSportsBlogs`).toPromise();
  }async getTechnologyBlogs(){
    return this.http.get(`${this.url}/dashboard/getTechnologyBlogs`).toPromise();
  }
  async getProfile(){
    return this.http.get(`${this.url}/login/getLoginId`).toPromise();
  }
  async deleteBlog(id){
    return this.http.delete(`${this.url}/admin/deleteBlog/${id}`).toPromise();
  }
  async getSpecificBlog(id){
    return this.http.get(`${this.url}/dashboard/getSpecificBlog/${id}`).toPromise();
  }
}

