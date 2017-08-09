import {Injectable, OnInit, Component} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-proxima-data',
  templateUrl: './proxima-data.component.html',
  styleUrls: ['./proxima-data.component.css']
})

export class ProximaDataComponent implements OnInit {
  api : any;
 
  constructor(private _http:Http){}

  postregister(){
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({ headers: headers, method: "post"});
    return this._http.get('https://beta-avulso.carguruclub.com.br/api/Calendario/proximoHorarioDisponivelObj?estado=SP&cidade=São Paulo')
    .map((res:Response) => res.json())
  }
  
  ngOnInit() {
    this.postregister();
  }

}
