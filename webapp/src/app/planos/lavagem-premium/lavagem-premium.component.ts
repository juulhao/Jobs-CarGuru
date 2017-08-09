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
  PlanPremium;
  constructor(http: Http,public router: Router) { 
  }

  ngOnInit() {
  }

  postPlans(event){
    event.preventDefault();    
      this.PlanPremium = JSON.parse(JSON.stringify({
        plano: "Lavagem Premium",
        Valor: 89  
      })); 
    console.log(this.PlanPremium);
   this.router.navigate(['/frequencias'], {queryParams: this.PlanPremium});
  }

}
