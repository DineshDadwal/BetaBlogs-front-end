import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {AdminLoginService} from '../services/admin-login/admin-login.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-password-reset',
  templateUrl: './admin-password-reset.component.html',
  styleUrls: ['./admin-password-reset.component.css']
})
export class AdminPasswordResetComponent implements OnInit {
  modalId;
  constructor(private admin: AdminLoginService,private  router:Router, beta:FormBuilder ) { }
  adminForm:FormGroup
  ngOnInit(): void {
    
  }
  setModalId(id){
    this.modalId=id; 
  }
  async updateUser(){
    const res:any= await this.admin.updateUser(this.modalId,this.adminForm.value)
    if(res.success) {
      // alert(res.message)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your changes has been saved',
        showConfirmButton: false,
        timer: 1500
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
    this.router.navigateByUrl('/404');

    }
    window.location.reload();
  }



}
