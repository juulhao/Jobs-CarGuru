import { FrequenciasComponent } from './../../frequencias/frequencias.component';

import { Component, OnInit } from '@angular/core';
import { LavagemBasicaComponent } from './../../planos/lavagem-basica/lavagem-basica.component';
import { LavagemPremiumComponent } from './../../planos/lavagem-premium/lavagem-premium.component';
import { LavagemGuruComponent } from './../../planos/lavagem-guru/lavagem-guru.component';
import { FrequenciasService } from './../../frequencias/frequencias.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public Basico : LavagemBasicaComponent
  public Premium : LavagemPremiumComponent
  public Guru : LavagemGuruComponent
  public cheirinho : FrequenciasComponent;
  public DadosUser  = { 
/*     user: '',
    products:
    [ { item: '', qty: 1 },
        { item: '', qty: 1 },
        { item: '', qty: 1 } ],
    addons:
    [ { item: '', qty: 1 },
        { item: '', qty: 1 },
        { item: '', qty: 1 } ],
    coupons: [ '' ],
    first:
    { date: '',
        product: '',
        session: '' },
    token: '',
    method: ''  */
  };
  constructor(){
  }

  ngOnInit() {
  }
  

}
