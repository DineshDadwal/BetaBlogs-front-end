import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {GoogleLoginService} from '../services/google-login.service';
@Injectable({
  providedIn: 'root'
})
export class GoogleLoginGuardGuard implements CanActivate {
  constructor(private google:GoogleLoginService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.google.signIn)
      return true;
      else
      return this.router.parseUrl('/login');
  }
  
}
