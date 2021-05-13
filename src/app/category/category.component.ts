import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {CategoryService} from "../services/category/category.service";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryForm:FormGroup
  constructor(private category:CategoryService ,private beta:FormBuilder) { }

  ngOnInit(): void {
    this.categoryForm=this.beta.group({
      name:['']
    })
  }

  async addCategory(){
    const res: any = await this.category.addCategory(this.categoryForm.value);
    if(res.success){
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      window.location.reload();
    }
    else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
      })
    }
  }
}