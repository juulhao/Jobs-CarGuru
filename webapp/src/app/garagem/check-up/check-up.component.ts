import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-check-up',
  templateUrl: './check-up.component.html',
  styleUrls: ['./check-up.component.css']
})
export class CheckUpComponent implements OnInit {
  public pointsCar: number;
  constructor() { }

  ngOnInit() {
    this.pointsCar = 10;
  }

}
