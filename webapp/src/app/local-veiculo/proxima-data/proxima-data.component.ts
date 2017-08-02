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

 
  constructor(private _http:Http){}

  postregister(api:any){
//      console.log(api);
  let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  let options = new RequestOptions({ headers: headers, method: "post"});
      return this._http.get(api,options)
          .map(res => res.json())
          .catch(this.handleError);
  }
  private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
  }


  ngOnInit() {
  }

}
