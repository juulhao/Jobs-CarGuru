import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { ModalIntroComponent } from '../modal-intro/modal-intro.component';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})

export class IntroComponent implements OnInit {
  constructor(  public modal: MdDialog  ){ }
  ngOnInit() {
    console.log('Carregou');
  }
  AbreModal(){
    this.modal.open(ModalIntroComponent);;
  }
}
