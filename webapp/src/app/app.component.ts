
import {Component, ViewChild, ElementRef, AfterViewInit, OnInit} from '@angular/core';

import { CartComponent } from './Core/cart/cart.component';
import { AuthService } from './Core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public cart : CartComponent;
  public auth: AuthService;
  constructor(){
    this.auth = new AuthService;
  }
  ngOnInit() {
    /* this.auth.login('test', 'test', 1); */
  }
  
  
}
