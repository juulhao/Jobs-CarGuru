import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-pedido',
  templateUrl: './rating-pedido.component.html',
  styleUrls: ['./rating-pedido.component.css']
})
export class RatingPedidoComponent implements OnInit {
  listaIcons : number = 5;

  constructor() { }

  ngOnInit() {
  }

}
