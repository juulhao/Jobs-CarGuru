import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { PlanosComponent } from './../planos.component';
  
@Component({
  selector: 'app-lavagem-guru',
  templateUrl: './lavagem-guru.component.html',
  styleUrls: ['./lavagem-guru.component.css'],
  host: {'class': 'FullWidthCard'}
})
export class LavagemGuruComponent implements OnInit {
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
    this.postPlans;
  }
  postPlans(event){
    event.preventDefault();    
      this.PlanBasico = JSON.parse(JSON.stringify({
        plano: "Lavagem Guru",
        Valor: 55  
      })); 
    console.log(this.PlanBasico)
     this.router.navigate(['/frequencias'])
  }

}
