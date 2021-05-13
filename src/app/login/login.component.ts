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
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup
// user: any;
// messages: gapi.client.gmail.Message[]
// message:string
FB: any;
title = 'blog';
  user: gapi.auth2.GoogleUser
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
      this.user = user 
      
      // console.log(user)
      // this.message = null
      // this.messages = null
      this.ref.detectChanges()
      if(this.user !== null){
        console.log(this.user)
       this.googleData()
  // this.router.navigateByUrl('/verification')

      }else{
        console.log("not yet")
      }
     
    })
  }


  async Login(){
  const res:any = await this.login.Login(this.loginForm.value)
  await this.login.setJwt(res.data);
  if(res.success){
    // alert(res.message)
    Swal.fire(
      'You are successfully Logged In!',
      'success'
    )
    this.router.navigateByUrl('/user-dashboard');
  }
  else{
    Swal.fire({
      icon: 'error',
      title: 'Wrong Password',
      text: 'check Your Credentials',
      footer: '<a href>Why do I have this issue?</a>'
    })
    this.router.navigateByUrl('/404');

  }
}
submitLogin(){
  this.FB.login((response)=>{
    console.log('submitLogin', response);
    if(response.authResponse){
  console.log("logged in to facebook");
    Swal.fire(
      'You are successfully Logged In!',
      'success'
    )}else{
      console.log("user login failed")
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
 signOut(){
  this.GoogleLoginService.signOut()
}
googleData(){
  this.http.post<any>('http://localhost:3000/google/google', this.user).subscribe(
  (res) => console.log(res),
  (err) => console.log(err)
);}
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