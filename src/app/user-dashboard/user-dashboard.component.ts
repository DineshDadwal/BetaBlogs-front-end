import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{FormGroup,FormBuilder,Validators, EmailValidator} from '@angular/forms';
import {DashboardService} from '../services/dashboard/dashboard.service';
import Swal from 'sweetalert2';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {CategoryService} from '../services/category/category.service';
import {SubcategoryService} from '../services/subcategory/subcategory.service';
import { LoginService } from '../services/login/login.service';
import { HttpClient } from '@angular/common/http';
import {UserDataTableService} from '../services/userDataTable/user-data-table.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  dashboardForm:FormGroup
  constructor(private beta:FormBuilder, private dashboard:DashboardService,private category:CategoryService,private subCategory:SubcategoryService,private login:LoginService, private router: Router, private http:HttpClient, private udt:UserDataTableService) { }
  allCategoryObj;
  user;
  userArr;
  image;
  class;
  tempAllSubCategoryObj;
  allSubCategoryObj;
  show = false
  tempImageArr: any = [];
  displayArr: any = [];
  ngOnInit(): void {
    this.dashboardForm=this.beta.group({
    
      title:['', [Validators.required, Validators.minLength(2)]],
      categoryId:['', Validators.required],
      subCategoryId:[''],
      Content:['', [Validators.required, Validators.minLength(50)]],
      Upload:['', Validators.required],
      author:['', [Validators.required, Validators.minLength(2), Validators.pattern("[a-z A-Z]*")]],
      createdAt:[Date.now()]
    });
    
    this.getCategorys();
    this.getSubCategorys();
   
}
async Dashboard(){
  console.log(this.dashboardForm.value)
  const res:any = await this.dashboard.Dashboard(this.dashboardForm.value)
  if(res.success){
    //  alert(res.message)
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

async getCategorys() {
  const res: any = await this.category.getCategorys();
  this.allCategoryObj = res.data;
}
async getSubCategorys() {
  const res: any = await this.subCategory.getSubCategorys();
  this.allSubCategoryObj = res.data;
  this.tempAllSubCategoryObj = res.data;

}
filterSubCategory(event) {
  let tempId = event.target.value;
  this.tempAllSubCategoryObj = this.allSubCategoryObj.filter(el => el.categoryId == tempId)
}

uploadImage(event){
  if(event.target.files.length> 0){
    const file = event.target.files[0];
    this.image = file;
  }
}
 
// uploadImage(event) {

//   let reader = new FileReader();

//   if (event.target.files && event.target.files.length) {
//     const [file] = event.target.files;
//     reader.readAsDataURL(file);
    
//     reader.onload = () => {
//       this.tempImageArr.push(reader.result);
//       this.displayArr.push(event.target.value.split(/(\\|\/)/g).pop());
//       this.dashboardForm.patchValue({
//         imageArr: this.tempImageArr
//       })
//       // console.log(this.specificationForm.value);
//     }
//   }

// }

onSubmit(){
  const formData = new FormData;
  formData.append('Upload', this.image);
// console.log(this.image)
  this.http.post<any>('https://betablogs-backend.herokuapp.com/dashboard/file', formData).subscribe(
    (res) => console.log(res),
    (err) => console.log(err)
  );

}
//////////////////////////////deleting  image from array
deleteImage(i) {
  this.tempImageArr.splice(i, 1)
  this.displayArr.splice(i, 1)
  this.dashboardForm.patchValue({
    imageArr: this.tempImageArr
  })
}


stripHTML(editor) {
  var holder = document.createElement('p');
  holder.innerHTML = editor;
  return holder.innerText;
}
async getSpecificUser(id){
  const res:any = await this.udt.getSpecificUser(id)
  if(res.succes){
      this.userArr = res.data;
      // console.log(this.userArr);
  }
  
}
async getProfile() {
  const res: any = await this.dashboard.getProfile();
  this.user = res.data;
  // console.log(this.user)
}
// logout 
async logout(){
  this.login.removeJwt();
  this.router.navigateByUrl('/login');
}

editorConfig: AngularEditorConfig = {
  editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'no',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'}
    ],
    customClasses: [
    {
      name: 'quote',
      class: 'quote',
    },
    {
      name: 'redText',
      class: 'redText'
    },
    {
      name: 'titleText',
      class: 'titleText',
      tag: 'h1',
    },
  ],
  uploadUrl: 'v1/image',
  uploadWithCredentials: false,
  sanitize: false,
  toolbarPosition: 'top',
  toolbarHiddenButtons: [
    ['bold', 'italic'],
    ['fontSize']
  ]
};
}
