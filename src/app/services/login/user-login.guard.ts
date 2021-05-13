import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './login.service';
import{GoogleLoginService} from '../google-login.service'
@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard implements CanActivate {
  constructor(private login:LoginService, private router:Router, private google: GoogleLoginService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.login.getJwt()){
        return true;

      }
    else {
      return this.router.parseUrl('/login');

    }
      if(this.google.observable()){
        return true;
      }
      else
      return this.router.parseUrl('/login');
  }
  
  
}
