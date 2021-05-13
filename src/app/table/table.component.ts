import { Component, OnInit } from '@angular/core';
import {UserDataTableService} from '../services/userDataTable/user-data-table.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private udt:UserDataTableService, private router:ActivatedRoute, private beta:FormBuilder) { }
  modalId;
  userArr ;
  user;
  firstName: String;
  registerForm:FormGroup
  id;
  ngOnInit(): void {
    this.router.params.subscribe(paramsId=> {
      this.user = paramsId.user
    })
    this.registerForm= this.beta.group({

      email:[''],
      password:[''],
      confirm:['']
      
    })
    this.getUser();
    
  }

  setModalId(id){
    this.modalId=id; 
  }



  async updateUser(){
    const res:any= await this.udt.updateUser(this.modalId,this.registerForm.value)
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
    }
    window.location.reload();
  }


  async getUser(){
    const res:any = await this.udt.getUser();
    if(res.success) {
      this.userArr=res.data;
      // console.log(this.userArr)
    }
    else{
      // alert(res.message)
    }
  }



  async deleteUser(id){
    const res:any = await this.udt.deleteUser(id)
    if(res.success) {
      // alert(res.message)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
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
    }
    this.ngOnInit();
  }



async getSpecificUser(id){
  const res:any = await this.udt.getSpecificUser(id)
  if(res.succes){
      this.userArr = res.data;
      // console.log(this.userArr);
  }
  // else{
  //   alert(res.message)
  // }
}
 Search(){

  this.userArr = this.userArr.filter(res =>{
     return res.firstName.toLowerCase().match(this.firstName.toLowerCase());
   })
 }
}



