import { Component, OnInit, ViewChild, AfterViewInit, Injectable } from '@angular/core';
import { Router, Params } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { PlanosComponent } from './../planos.component';
import { CupomComponent } from './../../shared/cupom/cupom.component';

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
  plano: Http;
  PlanBasico;
  constructor(_http: Http, public router: Router) { 
  }
  ngOnInit(){
    this.postPlans;
  }
  /* cupomBasico(){
    this.dialog.open(CupomComponent);

  } */
  postPlans(event){
    event.preventDefault();    
      this.PlanBasico = JSON.parse(JSON.stringify({
        plano: "Lavagem Básica",
        Valor: 48  
      })); 
     this.router.navigate(['/frequencias'], {queryParams: this.PlanBasico});
  }
}
