import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
allBlogs;
show = false

p: any = 1;
count: any = 5;
  constructor(private dashboard:DashboardService, private router:Router,private beta:FormBuilder) { }
  dashboardForm:FormGroup

  ngOnInit(): void {
    this.dashboardForm= this.beta.group({

      title:[''],
      categoryId:[''],
      subCategoryId:[''],
      Content:[''],
      Upload:[''],
      date:[Date.now()]
    })
    this.getNewsBlogs();
  }
  async getNewsBlogs(){
    const res:any = await this.dashboard.getNewsBlogs();
    if(res.success) {
      this.allBlogs=res.data;
      // console.log(this.allBlogs)

    }
    else{
      alert(res.message)
    }
  }
}
