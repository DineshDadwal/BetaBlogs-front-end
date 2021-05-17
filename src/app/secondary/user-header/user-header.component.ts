import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  constructor(private login:LoginService, private router:Router) { }

  ngOnInit(): void {
  }
  async logout(){
    this.login.removeJwt();
    this.router.navigateByUrl('/login');
  }
}
