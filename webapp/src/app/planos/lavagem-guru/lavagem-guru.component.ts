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
  PlanGuru;

  constructor(http: Http,public router: Router) { 
  }
 
  ngOnInit() {
    this.postPlans;
  }
  postPlans(event){
    event.preventDefault();    
      this.PlanGuru = JSON.parse(JSON.stringify({
        plano: "Lavagem Guru",
        Valor: 55  
      })); 
    console.log(this.PlanGuru)
    this.router.navigate(['/frequencias'], {queryParams: this.PlanGuru});
  }

}
