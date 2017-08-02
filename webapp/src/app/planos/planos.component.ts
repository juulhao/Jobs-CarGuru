
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


import { PerfilUser } from  './../Core/perfil-plano';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {
  
  planos:  Observable<Array<any>>;
  desconto: Observable<any>;
  card_ativo: any;
  
  perfil: PerfilUser = new PerfilUser;

  constructor(planoUser : PerfilUser) { 
  }
  ngOnInit() { 
  }
  getPlanoUser(){
    console.log('Peguei um método de outro component :D')
    this.perfil;
  }
  //Draggable Swipe Cards
  config: Object = {
    slidesPerView: 'auto',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    centeredSlides: true,
    paginationClickable: true,
    spaceBetween: 100
  };
}
