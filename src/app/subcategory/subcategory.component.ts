import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import {SubcategoryService} from '../services/subcategory/subcategory.service';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
  subCategoryForm:FormGroup
  constructor(private subCategory:SubcategoryService,private category:CategoryService,private beta:FormBuilder) { }
  allCategoryObj;

  ngOnInit(): void {
    this.subCategoryForm=this.beta.group({
      name:[''],
      categoryId:['']
    })
    this.getCategorys();
  }

  async getCategorys() {
    const res: any = await this.category.getCategorys();
    this.allCategoryObj = res.data;
  }
  async addSubCategory(){
    // console.log(this.subCategoryForm.value)
    const res: any = await this.subCategory.addSubCategory(this.subCategoryForm.value);
    if(res.success){
      alert(res.message)
      window.location.reload();
    }
    else{
      alert(res.message)
    }
  }

}
