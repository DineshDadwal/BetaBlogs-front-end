import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GmailServiceService {
  
  constructor() { }
  //   gapi.load('client',()=>{
  //     gapi.client.init({
  //       apiKey: 'AIzaSyCdNlfVK8d43ecsZeC0p12TlwLe95JXL3U',
  //       clientId: '659014617128-6e6fb4s9al04e15ldtb2knhmkg3j114e.apps.googleusercontent.com',
  //       discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
  //       scope: 'https://www.googleapis.com/auth/gmail.readonly'
  //     })
  //   })
  // }
  // public  list(user: gapi.auth2.GoogleUser) : Promise<gapi.client.gmail.ListMessagesResponse>{
  //   return new Promise( resolve =>{
  //     gapi.client.gmail.users.messages.list({
  //       userId: user.getId(),
  //       access_token: user.getAuthResponse().access_token,
  //       maxResults: 5
  //     }).then(response =>{
  //       resolve(response.result)
  //     })
  //   })
  // }
  // public getMessage(user: gapi.auth2.GoogleUser, id:string) : Promise<string>{
  //     return new Promise(resolve =>{
  //       gapi.client.gmail.users.messages.get({
  //         userId: user.getAuthResponse().access_token,
  //         access_token: user.getAuthResponse().access_token,
  //         id: id
  //       }).then(response =>{
  //         resolve(response.result.snippet)
  //       })
  //     })
  // }
}
