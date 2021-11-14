import { Injectable } from '@angular/core';
import { Follow } from "../../models/follow";

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  socialMedia: Follow[] = [
    new Follow("assets/socialMedia/facebook.png","https://facebook.com"),
    new Follow("assets/socialMedia/twitter.png","https://twitter.com"),
    new Follow("assets/socialMedia/youtube.png","https://youtube.com"),
    new Follow("assets/socialMedia/instagram.png","https://instagram.com")
  ]

  constructor() { }

  getAccounts(){
    return this.socialMedia
  }
}
