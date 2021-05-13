import { Component, OnInit,  } from '@angular/core';

import { Router } from '@angular/router';

import {AboutService} from '../services/about/about.service';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private about:AboutService,private router:Router,  ){}
PieChart: any;
barGraph: any;
public blogs;
public users;
data;

  ngOnInit(): void {

    this.getNumberOfBlogs(),
   this.getNumberOfUsers()
  //  let blog ;
  //  let user;
  //  user = fetch('http://localhost:3000/register/getCount').then(res=> res.json()).then(data=>  
  //  this.users = data.data

  //   ); 
    fetch('http://localhost:3000/register/getMenCount').then(res=> res.json()).then(data=>{
       data.male;
       data.female;
      this.PieChart = new Chart("pieChart", {
        type: 'pie',
        data:{
          labels:["Men", "Women"],
          datasets:[{
            label:"Gender",
            data:[data.male, data.female],
            backgroundColor:[
              'blue','pink'
            ]
          }]
        }
      })
    }
   
     );
     fetch('http://localhost:3000/dashboard/getBlogStats').then(res=> res.json()).then(data=>{
      data.tech;
      data.sports;
      data.politics;
      data.entertainment;
      data.news;
      data.corona;

     this.barGraph = new Chart("barGraph", {
       type: 'bar',
       data:{
         labels:["Coronavirus", "News", "Politics", "Entertainment", "Sports", "Technology"],
         datasets:[{
           label:"No. of Blogs",
           data:[data.corona, data.news, data.entertainment, data.politics, data.sports, data.tech],
           backgroundColor:[
            'yellow','pink', 'green', 'red','blue', 'orange'
           ]
         }]
       },
       options:{
          scales:{
            yAxes:[{
              ticks:{
                beginAtZero: true
              }
            }]
          }
       }
     })
   }
  
    );  
  
    
}

// logout 
// async logout(){
//   this.admin.removeJwt();
//   this.router.navigateByUrl('/admin/login');
// }

async getNumberOfBlogs(){
  const res:any = await this.about.getNumberOfBlogs();
  if(res.success) {
   

    this.blogs=res.data;
    // console.log(this.blogs)// type == Number
  }
  else{
    alert(res.message)
  }
}
async getNumberOfUsers(){
  const res:any = await this.about.getNumberOfUsers();
  if(res.success) {
    this.users=res.data;
    // console.log(typeof this.users) // type == Number
  }
  else{
    alert(res.message)
  }
}


}
