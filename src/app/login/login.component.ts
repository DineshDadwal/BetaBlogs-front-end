import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoginService} from '../services/login/login.service';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';
import { GoogleLoginService } from '../services/google-login.service';
import { HttpClient } from '@angular/common/http';
import {AuthService, SocialUser, GoogleLoginProvider} from 'angular4-social-login';
import { GmailServiceService } from '../services/gmail-service.service';
import { async } from '@angular/core/testing';
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
// user: any;
// messages: gapi.client.gmail.Message[]
users;
title = 'blog';
  // user: gapi.auth2.GoogleUser
  user: SocialUser
  constructor(private login:LoginService, private beta:FormBuilder, private router: Router, private GoogleLoginService:GoogleLoginService, private ref:ChangeDetectorRef, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm=this.beta.group({
      email:[''],
      password:['']
    });
    
    // this.authService.authState.subscribe((user) => {
    //   this.user = user;
    //   console.log(user)
    // })
    
    this.GoogleLoginService.observable().subscribe(user =>{
      this.users = user.getBasicProfile() 
      this.ref.detectChanges()
      if(this.users !== null){
        console.log("Sign in Success")
      }else{
        console.log("not yet")
      }
     
    });
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '481538063277279',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
        
      FB.AppEvents.logPageView();   
        
    };
  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }


  async Login(){
  const res:any = await this.login.Login(this.loginForm.value)
  await this.login.setJwt(res.data);
  if(res.success){
    // alert(res.message)
    Swal.fire(
      {
      
        icon: 'success',
        title: 'Welcome',
        showConfirmButton: false,
        timer: 1500}
    )
    this.router.navigateByUrl('/user-dashboard');
  }
  else{
    Swal.fire({
      icon: 'warning',
      title: 'Wrong Password',
      text: 'check Your Credentials',
      footer: '<a href>Why do I have this issue?</a>'
    })
    // this.router.navigateByUrl('/404');

  }
}
submitLogin(){
  FB.login((response)=>{
    console.log('submitLogin', response);
    if(response.authResponse){
  console.log(response);
    Swal.fire({
      
      icon: 'success',
      title: 'Welcome',
      showConfirmButton: false,
      timer: 1500}
    )
 
    this.router.navigateByUrl('/user/proxy-user-dashboard');

  }else{
    Swal.fire({
      icon: 'error',
      title: 'Wrong Password',
      text: 'check Your Credentials',
      footer: '<a href>Why do I have this issue?</a>'
    })
    }
  })
}
// signInGoogle(platform:string): void {
//   platform = GoogleLoginProvider.PROVIDER_ID;
//   this.authService.signIn(platform).then((response) =>{
//     console.log(platform + "logged in user is" +  response);
//     this.user = response;
//   });
// }
// signOut():any{
//   this.authService.signOut();
// }

async signIn(){
 this.GoogleLoginService.signIn()
 
  this.ref.detectChanges() 
    
  

}


// googleData(){
//   this.http.post<any>('http://localhost:3000/google/google', this.user).subscribe(
//   (res) => console.log(res),
//   (err) => console.log(err)
// );}
// onSubmit(){


// }
// list(){
//   this.GmailService.list(this.user).then(result =>{
//     this.messages = result.messages
//     this.ref.detectChanges()
//   })
// }
// getMessage(id:string){
//   this.GmailService.getMessage(this.user, id).then(result =>{
//     this.message = result
//    
//   })
// }
}