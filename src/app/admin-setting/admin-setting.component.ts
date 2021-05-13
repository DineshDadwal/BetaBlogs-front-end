import { Component, OnInit } from '@angular/core';
import {AboutService} from '../services/about/about.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.css']
})
export class AdminSettingComponent implements OnInit {
aboutForm:FormGroup
  constructor(private about:AboutService , private beta : FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.aboutForm=this.beta.group({
    about:['']
    })
  }
  async About(){
    // console.log(this.aboutForm.value)
    const res:any = await this.about.About(this.aboutForm.value)
    if(res.success){
      //  alert(res.message)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('/betaBlogs/about');
    }
    else
    // alert(res.message)
     
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    footer: '<a href>Why do I have this issue?</a>'
  })
  }
}
