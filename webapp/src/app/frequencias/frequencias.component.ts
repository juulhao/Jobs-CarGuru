import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-frequencias',
  templateUrl: './frequencias.component.html',
  styleUrls: ['./frequencias.component.css'],
})
export class FrequenciasComponent {
  
  AddonSelecionado : boolean = false;

  addons:  Observable<Array<any>>;

  constructor(_http : Http,http: Http,public router : Router) {
     http
    .get('https://api.carguruclub.com/v1/servicos/')
    .map(res => res.json())
    .subscribe(addons => {
      this.addons = addons;
      console.log(this.addons);
    }, erro => console.log(erro));
   
  }  

  color = 'warn';
  public counter : number = 1;
  public limite : number = 6;
  public valormensal : number = 48;

  ngOnInit(){
    this.SelectUser;
  }
  SelectUser(el, event){
    console.log();
    
  }
  
  

  NextPage(){
    this.router.navigateByUrl('/local-veiculo');
  }
  Increment(){
    this.counter++;
    //Aqui o mundo paralelo começa: Switch contando a partir do 0!!!
    switch (this.counter){
      case 1:
        this.valormensal = 43.20;
        console.log('2');
      break;
      case 2:
        this.valormensal = 40.32;
        console.log('3');
      break;
      case 3:
  
        this.valormensal = 39.36;
        console.log('4');
      break;
      case 4:
        
        this.valormensal = 38.40;
        console.log('5');
      break;
      case 5:
      
        this.valormensal = 36.96;
        console.log('6');
      break;
      default:
      console.log('default');
    }
  }
  Decrement(){
    this.counter--;
    //Aqui o mundo paralelo começa: Switch contando a partir do 0!!!
    switch (this.counter){
      case 6:
        this.valormensal = 36.96;
        console.log('6');
      break;
      case 5:
        this.valormensal =  38.40;
        console.log('5');
      break;
      case 4:
        
        this.valormensal = 39.36;
        console.log('4');
      break;
      case 3:
      
        this.valormensal = 40.32;
        console.log('3');
      break;
      case 2:
       
        this.valormensal = 43.20;
        console.log('2');
      break;
      case 1:
      
        this.valormensal = 48;
        console.log('1');
      break;
    default:
      console.log('default');
    }
  }
}
