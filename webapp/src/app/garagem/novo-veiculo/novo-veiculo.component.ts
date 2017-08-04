import { Router, RouterModule } from '@angular/router';
import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MdDialog } from '@angular/material';
import { Http, Headers,RequestOptions } from "@angular/http";

@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.component.html',
  styleUrls: ['./novo-veiculo.component.css']
})

@Injectable()
export class NovoVeiculoComponent implements OnInit {
  public user; //Vou receber do nativo
  public model;
  public license;
  public cor;

  private veiculo: Object = {
    user: 'cliente8004@carguruclub.com',
    make: 'undefined', //autocomplete
    model: '',
    license: '',
    info: '',
    name: ''
  }; 

  constructor(public router: Router, private http : Http) { }  

  CadastroVeiculo(event){
    event.stopPropagation();
    console.log('Objeto atual:', this.veiculo)
    let headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    /* headers.append('Autorizathion', 'Basic');   */
    this.http.post('https://middleware.carguruclub.com/Cars/Insert',this.veiculo, { headers : headers } )
    .subscribe(
        data => {
          alert('Carro cadastrado com sucesso!');
          this.router.navigateByUrl('/status-pedido'); 
        },
        err => { alert('Erro ao adicionar veículo') }//err); }
    );
  }

  ngOnInit() {
  }

}
