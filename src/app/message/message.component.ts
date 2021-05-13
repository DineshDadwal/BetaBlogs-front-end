import { Component, OnInit } from '@angular/core';
import {AboutService} from '../services/about/about.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
allmessage;
p: any = 1;
  count: any = 10;
  constructor(private router:Router, private beta:FormBuilder, private about:AboutService) { }
  messageForm:FormGroup

  ngOnInit(): void {
    this.messageForm=this.beta.group({
    
      name:[''],
      message:[''],
      createdAt:['']
    })
    this.getMessage();
  }
  async getMessage(){
    const res:any = await this.about.getMessage();
    if(res.success) {
      this.allmessage=res.data;
      // console.log(this.allmessage)
    }
    else{
      this.router.navigateByUrl('/404');

    }
  }
}
