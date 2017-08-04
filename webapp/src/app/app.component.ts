import {Component, ViewChild, ElementRef, AfterViewInit, OnInit} from '@angular/core';

import { CartComponent } from './Core/cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public cart : CartComponent;
  constructor(){
  }
  ngOnInit() { 
    this.cart.createObject();
  }
  
}
