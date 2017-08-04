import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-observacoes',
  templateUrl: './observacoes.component.html',
  styleUrls: ['./observacoes.component.css']
})
export class ObservacoesComponent implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }
  nextPage(){
     this.router.navigateByUrl('/novo-veiculo');
  }

}
