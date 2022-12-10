import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../services/register/register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
userArr;
setId;
user;
registerForm:FormGroup

  constructor(private register:RegisterService, private router:Router, private beta:FormBuilder) { }

  ngOnInit(): void {
    // this.router.params.subscribe(paramsId=> {
    //   this.user = paramsId.user
    // })
    this.registerForm= this.beta.group({
      password:['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]],
      confirm:['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$')]]
      
    })
    this.getUserDetails(),
    this.updateUserDetails(this.userArr.id)
  }
  async getUserDetails(){
    const res:any = await this.register.getUserDetails();
    if(res.success) {
      this.userArr=res.data;
      // console.log(this.userArr)
    }
    else{
      alert(res.message)
    this.router.navigateByUrl('/404');

    }
  }

  async updateUserDetails(id){
    const res:any = await this.register.updateUserDetails(id, this.registerForm.value)
    if(res.success) {
      // alert(res.message)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your changes has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('/login');
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
  }

}
