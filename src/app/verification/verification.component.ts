import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {RegisterService} from '../services/register/register.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {
  verificationForm : FormGroup
  
  otp: {};
  constructor( private router: Router, private beta:FormBuilder, private register:RegisterService) { }

  ngOnInit(): void {
    this.verificationForm=this.beta.group({
      otp:['']
    })
    
    this.getOtp();
  }
  
  // onKey(event: any) { // without type info
  //   this.values = event.target.value ;
  //  this.values.toString()
  //   console.log(this.values);
  // }
  verify(){
    const data = this.verificationForm.value;
    // console.log(data)
     
      
    
    if(  this.otp === data.otp){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      this.router.navigateByUrl('/login');

    }else{
      console.log('error');
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    }
    
    
  }
 
 async getOtp(){
    const res: any = await this.register.getOtp();
    this.otp = res.data;
    // console.log(this.otp)
  }
  
  
}