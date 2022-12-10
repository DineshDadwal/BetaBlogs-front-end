import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { viewClassName } from '@angular/compiler';
import {AboutService} from '../services/about/about.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent implements OnInit {
  allBlogs;
  
  show = false
  url;
  views;
  p: any = 1;
  count: any = 10;
  constructor(private dashboard:DashboardService, private router:Router,private beta:FormBuilder, private about:AboutService, 
    private http:HttpClient) { }
dashboardForm:FormGroup
  ngOnInit(): void {
    this.dashboardForm= this.beta.group({

      title:[''],
      categoryId:[''],
      subCategoryId:[''],
      Content:[''],
      Upload:[''],
      author:[''],
      createdAt:[''],
      
    })
    this.get();
    
  
  //   let view
  //   this.http.get<any>('https://api.countapi.xyz/update/Honey/youtube/?amount=1', this.views).subscribe(
  //     (res) => view = res,
  //     (err) => console.log(err)
  //   );
  // console.log(view)
  }
  
  async get(){
    const res:any = await this.dashboard.get();
    if(res.success) {
      this.allBlogs=res.data;
      console.log(this.allBlogs)
    }
    else{
      alert(res.message)
    }
  }
  
//   window.onload.view(){
  
  //   this.http.post<any>('http://localhost:3000/about/views', this.views).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.log(err)
  // );



}
