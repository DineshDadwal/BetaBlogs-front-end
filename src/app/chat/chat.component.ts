import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{FormGroup,FormBuilder,} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{AboutService} from '../services/about/about.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messageForm:FormGroup
  constructor(private beta:FormBuilder, private http:HttpClient, private service:AboutService, private router: Router) { }

  ngOnInit(): void {
    this.messageForm=this.beta.group({
    
      name:[''],
      message:[''],
      createdAt:[Date.now()]
    })
  }
async message(){
  const res:any = await this.service.message(this.messageForm.value)
  if(res.success){
    //  alert(res.message)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
    // this.router.navigateByUrl('/');
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
