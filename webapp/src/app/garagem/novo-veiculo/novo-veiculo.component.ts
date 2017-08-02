import { Router, RouterModule } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.component.html',
  styleUrls: ['./novo-veiculo.component.css']
})

@Injectable()
export class NovoVeiculoComponent implements OnInit {
  modelo: string;
  placa: string;
  cor: string;
 
  constructor(public router: Router) { }
  
  private veiculo: Object = {modelo: '', placa: '', cor: ''}; 
  public grava():void {
    // envia os dados do palestrante para uma API
      console.log(this);
      console.log( "Modelo: " + this.modelo);
      console.log( "Placa: " + this.placa);
      console.log( "Cor:" + this.cor );
      this.modelo, this.cor, this.placa = ''; // limpa o formulário
      this.router.navigateByUrl('/status-pedido');
  } 

  ngOnInit() {
 
  }

}
