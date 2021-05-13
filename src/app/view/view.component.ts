import { Component, OnInit } from '@angular/core';
import {UserDataTableService} from '../services/userDataTable/user-data-table.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  obj;
  id;
  constructor(private udt:UserDataTableService, private router:ActivatedRoute, private beta:FormBuilder) { }
  registerForm:FormGroup
  ngOnInit(): void {
    // this.registerForm= this.beta.group({
    //   firstName:[''],
    //   lastName:[''],
    //   email:[''],
    //   password:[''],
    //   confirm:[''],
    //   DOB:[''],
    //   phone:[''],
    //   fLink:[''],
    //   iLink:[''],
    //   gender:['']
    // })
    this.router.params.subscribe(paramsId=> {
      this.id = paramsId.id
      
    })
    // console.log(this.obj)
      this.getSpecificUser()
  }
  // setModalId(){
  //   this.getSpecificUser(this.registerForm)
  // }
 async getSpecificUser(){
    const res:any = await this.udt.getSpecificUser(this.id);
    this.obj = res.data;
      // console.log(this.obj)
    
    
}

}