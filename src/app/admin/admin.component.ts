import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {AdminLoginService} from '../services/admin-login/admin-login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminForm:FormGroup
  constructor(private admin:AdminLoginService ,private beta:FormBuilder, private router:Router) { }

  ngOnInit(): void {
    this.adminForm= this.beta.group({
      email:[''],
      password:['']
    })
  }

  async adminLogin(){
    const res:any = await this.admin.adminLogin(this.adminForm.value)
    await this.admin.setJwt(res.data);
    if(res.success){
      // alert(res.message)
      Swal.fire({
        title: 'Welcome Back',
        text: 'Admin Panel Initiated',
        imageUrl: 'https://media2.giphy.com/media/xUPGGDNsLvqsBOhuU0/200.webp?cid=ecf05e47mlkl8ca70gfkwuimg0vwf32ki6efxkujrrf4hfwp&rid=200.webp',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
      this.router.navigateByUrl('/admin/dashboard');
    }
    else
    // alert(res.message)
    Swal.fire(
      'Wrong!',
      'Invalid Input?',
      'question'
    )
    // this.router.navigateByUrl('/404');
    }
  
  }
  

