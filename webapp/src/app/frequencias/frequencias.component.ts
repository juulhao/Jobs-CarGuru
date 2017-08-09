import { style } from '@angular/animations';
import { Component, NgModule, Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MdSlideToggleModule} from '@angular/material';
import { LavagemGuruComponent } from './../planos/lavagem-guru/lavagem-guru.component';
import { LavagemPremiumComponent } from './../planos/lavagem-premium/lavagem-premium.component';
import { LavagemBasicaComponent } from './../planos/lavagem-basica/lavagem-basica.component';

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

  public opcionais = false;
  public _cheirinho : boolean = false;
  public addons:  Observable<Array<any>>;
  public selecionado: boolean = false;
  public Basico : LavagemBasicaComponent;
  public Prmeium : LavagemPremiumComponent;
  public Guru : LavagemGuruComponent;
  PlanoSelecinado;
  checked = false;
  disabled = false;
  valorPlano : string;
  public valormensal : number = Number(this.valorPlano);
  constructor(public http: Http,public router : Router) {
    this.selecionado = this.selecionado;
  }
  
  ngOnInit(){
    this.listaServicos();
    this.recuperaPlano();
  
  }
  recuperaPlano(){
    const param = this.router.parseUrl(this.router.url).queryParams;
    this.valorPlano = param.Valor;
    console.log(this.valorPlano);
  }
  getAddons(){
    const Frequencia = this.valormensal;
    const _Opcionais = this.getOpcionais;
    this.router.navigateByUrl('/local-veiculo');
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
  getOpcionais(event, el){
    el = document.getElementsByClassName("opcional_box");
    for (var i = 0; i < el.length; i++) {
      console.log(el[i].id);
    }
  }
  Increment(){
    this.counter++;
    //Aqui o mundo paralelo começa: Switch contando a partir do 0!!!
    switch (this.counter){
      case 1:
       this.valormensal = Number(this.valorPlano) % 10;
        break;
      case 2:
        this.valormensal = Number(this.valorPlano)  % 16;
        console.log('3');
        break;
      case 3:
        this.valormensal = Number(this.valorPlano)  % 18;
        console.log('4');
        break;
      case 4:
        this.valormensal = Number(this.valorPlano)  % 20;
        console.log('5');
        break;
      case 5:
        this.valormensal = Number(this.valorPlano)  % 23;
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
        Number(this.valorPlano) / 1;
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
        Number(this.valorPlano) / 4;
        console.log('1');
      break;
    default:
      console.log('default');
    }
  }
}
