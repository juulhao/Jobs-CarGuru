import { style } from '@angular/animations';
import { Component, NgModule, Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({

  selector: 'app-frequencias',
  templateUrl: './frequencias.component.html',
  styleUrls: ['./frequencias.component.css'],

})
@Injectable()
export class FrequenciasComponent {
  public color = 'warn';
  public counter : number = 1;
  public limite : number = 6;
  public valormensal : number = 48;
  public opcionais :  number;
  public _cheirinho : boolean = false;
  public addons:  Observable<Array<any>>;

  constructor(public http: Http,public router : Router) {
  }
  
  ngOnInit(){
    this.listaServicos();
  }
  listaServicos(){
    this.http
      .get('https://api.carguruclub.com/v1/servicos/')
      .map(res => res.json())
      .subscribe(addons => {
        this.addons = addons;
        console.log(this.addons);
      }, erro => console.log('Erro ao carregar serviços'));
  }
  getAddons(){
    const Frequencia = this.Increment();
    console.log(Frequencia);
  }
  getOpcionais(){
    const cheirinho = document.getElementById('lavagem_cheirinho').addEventListener('click', function(){
      console.log("Cheirinho ativado");
      document.getElementById('lavagem_cheirinho').style.border = "1px solid #000";
      if(document.getElementById('lavagem_cheirinho').style.border = "1px solid #000"){
        document.getElementById('lavagem_cheirinho').addEventListener('click', function(){
          document.getElementById('lavagem_cheirinho').style.border = "none";
        });
      }
      
    });
    const snacks = document.getElementById('snacks').addEventListener('click', function(){
      console.log("snacks ativado");
    });
    const lencos = document.getElementById('lenco').addEventListener('click', function(){
      console.log("lenco ativado");
    });
  }
  Increment(){
    this.counter++;
    //Aqui o mundo paralelo começa: Switch contando a partir do 0!!!
    switch (this.counter){
      case 1:
        this.valormensal = 43.20;
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
      console.log(this.counter);
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
