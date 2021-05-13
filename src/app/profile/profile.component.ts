import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../services/dashboard/dashboard.service';
import { LoginService } from '../services/login/login.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
obj;
user: gapi.auth2.GoogleUser

  constructor(private dashboard: DashboardService, private login:LoginService, private router: Router) { }

  ngOnInit(): void {
    this.getProfile()
   
  }
  async getProfile() {
    const res: any = await this.dashboard.getProfile();
    this.obj = res.data;
    // console.log(this.obj)
  }
  async logout(){
    this.login.removeJwt();
    this.router.navigateByUrl('/login');
  }
  
}
