import { Injectable } from '@angular/core';
import { Http, Headers,RequestOptions } from '@angular/http';

@Injectable()
export class HeaderService {

  constructor() { }

 //Cria header Default Para as requsições
	HeaderRequest(){
	 	/* let body = JSON.stringify(pessoa); */
	 	let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    /* headers.append("Authorization", "Bearer " + this.accessToken); */ // inserir Token do perfil do usuário
    console.log('Header already!')
  }

}
