import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class AuthService implements OnInit {
  public http: Http
  localUser = {
     nome: '',
     email: '',
     id: ''
   }
  
  constructor() {
  }
  ngOnInit(){
  }
  
  login() {
    /* let checknow = this.auth.authenticatenow(this.localUser);
    checknow.then((res) => {
      if(res) {
        this.router.navigate(['/second']);
      }
      else {
        console.log('Invalid user');
      }
    })     */
  }
}
