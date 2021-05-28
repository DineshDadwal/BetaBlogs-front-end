import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../services/dashboard/dashboard.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-specific-blog',
  templateUrl: './specific-blog.component.html',
  styleUrls: ['./specific-blog.component.css']
})
export class SpecificBlogComponent implements OnInit {
  obj;
  id;
  constructor(private dashboard:DashboardService, private router:ActivatedRoute, private beta:FormBuilder) { }
  dashboardForm:FormGroup

  ngOnInit(): void {
    this.router.params.subscribe(paramsId=> {
      this.id = paramsId.id
      
    })
    this.getSpecificBlog()
  }
  async getSpecificBlog(){
    const res:any = await this.dashboard.getSpecificBlog(this.id);
    this.obj = res.data;
}
}