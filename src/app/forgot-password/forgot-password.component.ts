import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{FormGroup,FormBuilder,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{RegisterService} from '../services/register/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  resetForm:FormGroup
  constructor(private beta:FormBuilder, private http:HttpClient, private service:RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.resetForm=this.beta.group({
    
      email:['']
    })
  }
async reset(){
  const res:any = await this.service.reset(this.resetForm.value)
  if(res.success){
    //  alert(res.message)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Please check your mail',
      showConfirmButton: false,
      timer: 9000
    })
    this.router.navigateByUrl('/');
  }
  else{
  // alert(res.message)
   
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href>Why do I have this issue?</a>'
})
this.router.navigateByUrl('/404');
  }

}
}
