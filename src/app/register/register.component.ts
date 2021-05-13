import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {RegisterService} from '../services/register/register.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  show = false
  image;
  registerForm:FormGroup
  constructor(private beta:FormBuilder, private register:RegisterService, private router: Router, private http:HttpClient) { }

  ngOnInit(): void {
    this.registerForm=this.beta.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      password:[''],
      confirm:[''],
      DOB:[''],
      phone:[''],
      gender:[''],
      profile:['']
    })
  }
  async Register(){
    const res:any = await this.register.Register(this.registerForm.value)
    if(res.success){
      // alert(res.message)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      
      this.router.navigateByUrl('/verification');
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
uploadImage(event){
  if(event.target.files.length> 0){
    const file = event.target.files[0];
    this.image = file;
  }
}
onSubmit(){
  const formData = new FormData;
  formData.append('Upload', this.image);
// console.log(this.image)
  this.http.post<any>('http://localhost:3000/dashboard/file', formData).subscribe(
    (res) => console.log(res),
    (err) => console.log(err)
  );

}
}
