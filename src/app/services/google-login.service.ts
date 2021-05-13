import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {
  private auth2: gapi.auth2.GoogleAuth
  private subject = new ReplaySubject<gapi.auth2.GoogleUser>(1)
  info: {}
  constructor(private router: Router) {
    gapi.load('auth2', ()=>{
     this.auth2 = gapi.auth2.init({
        client_id: '659014617128-6e6fb4s9al04e15ldtb2knhmkg3j114e.apps.googleusercontent.com',
        scope: 'profile email '
      })
    })
   }
  
   public signIn(){
     this.info = this.auth2.currentUser.get().getBasicProfile()
     this.auth2.signIn({
      scope:'https://www.googleapis.com/auth/gmail.readonly'
     }).then(user => {
      this.subject.next(user)
      // console.log(user)
      // this.router.navigateByUrl('/user-dashboard')
     }).catch(()=>{
      this.subject.next(null)
     })
   }
   public signOut(){
     this.auth2.signOut().then(()=>{

     })
   }
   public observable(): Observable<gapi.auth2.GoogleUser>{
    return this.subject.asObservable()
  }
  
}
