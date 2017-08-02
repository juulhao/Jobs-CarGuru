import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lavagem-premium',
  templateUrl: './lavagem-premium.component.html',
  styleUrls: ['./lavagem-premium.component.css'],
  host: {'class': 'FullWidthCard'}
})
export class LavagemPremiumComponent implements OnInit {
  planos:  Observable<Array<any>>;
  plano: Http;
  Valores: Object[] = [];
  PlanBasico;

  constructor(http: Http,public router: Router) { 
    http
    .get('https://api.carguruclub.com/v1/servicos/')
    .map(res => res.json())
    .subscribe(planos => {
      this.planos = planos;
    }, erro => console.log(erro));
  }

  ngOnInit() {
  }

  postPlans(event){
    event.preventDefault();    
      this.PlanBasico = JSON.parse(JSON.stringify({
        plano: "Lavagem Premium",
        Valor: 89  
      })); 
    console.log(this.PlanBasico);
   ;
  }

}
