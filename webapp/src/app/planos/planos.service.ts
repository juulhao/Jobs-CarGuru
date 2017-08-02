import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 

@Injectable()
export class PlanosService {
  constructor(private http: Http) { }

  getPeople() {
    return this.http.get('api/people.json')
      .map(response => response.json());
  }
}
