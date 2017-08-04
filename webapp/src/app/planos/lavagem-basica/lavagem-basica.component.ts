import { Component, OnInit, ViewChild, AfterViewInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { PlanosComponent } from './../planos.component';

@Component({
  selector: 'app-lavagem-basica',
  templateUrl: './lavagem-basica.component.html',
  styleUrls: ['./lavagem-basica.component.css'],
  host: {'class': 'FullWidthCard'}
})
@Injectable()
export class LavagemBasicaComponent implements OnInit {
  planos:  Observable<Array<any>>;
  desconto: Observable<any>;
  http : Http;
  plano: Http;
  PlanBasico;
  constructor(_http: Http, public router: Router) { 
    _http //criar método para listagem
    .get('https://api.carguruclub.com/v1/servicos/')
    .map(res => res.json())
    .subscribe(planos => {
      this.planos = planos;
    }, erro => console.log(erro));
  }
  ngOnInit(){
    this.postPlans;
  }
  postPlans(event){
    event.preventDefault();    
      this.PlanBasico = JSON.parse(JSON.stringify({
        plano: "Lavagem Básica",
        Valor: 48  
      })); 
    console.log(this.PlanBasico);
     this.router.navigate(['/frequencias'])
  }
}
