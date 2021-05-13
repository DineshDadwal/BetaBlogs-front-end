import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../services/dashboard/dashboard.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {
  allBlogs;
  p: any = 1;
  count: any = 5;
  show = false

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
    this.getPoliticsBlogs();
  }
  async getPoliticsBlogs(){
    const res:any = await this.dashboard.getPoliticsBlogs();
    if(res.success) {
      this.allBlogs=res.data;
      // console.log(this.allBlogs)

    }
    else{
      alert(res.message)
    }
  }
}
