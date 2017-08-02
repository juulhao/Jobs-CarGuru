
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-status-pedidos',
  templateUrl: './status-pedidos.component.html',
  styleUrls: ['./status-pedidos.component.css']
})
export class StatusPedidosComponent implements OnInit {
  public status:  Observable<any>;
  constructor(public http: Http) { 
  }
  ngOnInit () {
    this.getAPI();
    this.getStatus();
  }
  public getAPI(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic UUJmcFNxMjZsMU1ab0JibWpRSURBUUFCOnN0aEl4dnNlckZZaFRjVTEwckxLZ0VxMzhrVDljSEZ2U1JjbWRCVGE1MDA3bEcxNEVJRnRndXhKS3pEOWdad3c=');
    this.http
    .get('https://beta-avulso.carguruclub.com.br/api/Calendario/proximoHorarioDisponivelObj?estado=SP&cidade=São Paulo', { headers: headers })
    .map(res => res.json())
    .subscribe(status => {
      console.log(status);
      return this.status;
    }, erro => console.log(erro));
  }

  public getStatus(){
  }

}
