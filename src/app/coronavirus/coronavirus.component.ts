import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard/dashboard.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-coronavirus',
  templateUrl: './coronavirus.component.html',
  styleUrls: ['./coronavirus.component.css']
})
export class CoronavirusComponent implements OnInit {
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
    this.getCoronavirusBlogs();
  }
  async getCoronavirusBlogs(){
    const res:any = await this.dashboard.getCoronavirusBlogs();
    if(res.success) {
      this.allBlogs=res.data;
      // console.log(this.allBlogs)

    }
    else{
      alert(res.message)
    }
  }
}
