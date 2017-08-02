import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MapsComponent } from './../shared/maps/maps.component';

@Component({
  selector: 'app-local-veiculo',
  templateUrl: './local-veiculo.component.html',
  styleUrls: ['./local-veiculo.component.css']
})

export class LocalVeiculoComponent implements OnInit {

  color = 'warn';
  constructor() { 
  }
  ngOnInit() {
   const initMap = new MapsComponent;
  }
  pegaEnderecos(){
    const getEnderecos = new MapsComponent;
   
  }
  
}
