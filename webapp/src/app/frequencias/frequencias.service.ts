import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import { Http, Headers,RequestOptions } from "@angular/http";

@Injectable()
export class FrequenciasService {
  private http: Http
  private apiUrl = 'https://api.carguruclub.com/v1/servicos/';  // URL para web api

  dadosPlanos = {'teste' : 'name'};
  constructor() {
  } 

  //Enviando Dados 
  Cadastrar(){
    let headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    /* headers.append('Access-Control-Allow-Origin', '*'); */
    this.http.post('https://middleware.carguruclub.com/Cars/Insert', JSON.stringify(this.dadosPlanos), { headers : headers } )
    .subscribe(
        data => { console.log(data); },
        err => { console.log('Erro:' + err); }
    );
  }

}
