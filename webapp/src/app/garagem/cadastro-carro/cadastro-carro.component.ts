import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-carro',
  templateUrl: './cadastro-carro.component.html',
  styleUrls: ['./cadastro-carro.component.css']
})
export class CadastroCarroComponent implements OnInit {

  constructor(public router : Router) { }
  
  ngOnInit() {
  }
  NextPage(){
    this.router.navigateByUrl('/checkup');
  }
}
