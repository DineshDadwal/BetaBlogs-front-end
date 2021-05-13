import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard/dashboard.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  dashboardForm:FormGroup
  allBlogs;
  show = false
  p: any = 1;
  count: any = 10;
  constructor(private dashboard:DashboardService,private login:LoginService,private beta:FormBuilder, private router:Router) { }
  
  ngOnInit(): void {
    this.dashboardForm = this.beta.group({
      title:[''],
      Content:[''],
      Upload:['']
    })
   this.get()
  }

  

  async get(){
    const res:any = await this.dashboard.get();
    if(res.success) {
      this.allBlogs=res.data;
      // console.log(this.allBlogs)
    }
    else{
      alert(res.message)
    }
  }
  async deleteBlog(id){
    const res:any = await this.dashboard.deleteBlog(id)
    if(res.success) {
      // alert(res.message)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
    else{
      // alert(res.message)
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    }
    this.ngOnInit();
  }
// logout 
async logout(){
  this.login.removeJwt();
  this.router.navigateByUrl('/login');
}
}



