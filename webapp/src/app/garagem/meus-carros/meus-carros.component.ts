import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meus-carros',
  templateUrl: './meus-carros.component.html',
  styleUrls: ['./meus-carros.component.css']
})
export class MeusCarrosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    //Draggable Swipe Cards
      config: Object = {
      pagination: '.swiper-pagination',
      direction: 'vertical',
      slidesPerView: 3,
      paginationClickable: true,
      spaceBetween: 10,
      mousewheelControl: true
  };

}
