import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { MapsComponent } from './../shared/maps/maps.component';

@Component({
  selector: 'app-local-veiculo',
  templateUrl: './local-veiculo.component.html',
  styleUrls: ['./local-veiculo.component.css']
})

export class LocalVeiculoComponent implements OnInit {
  observacoes : Object;

  color = 'warn';
  constructor(public router : Router) { 
  }
  ngOnInit() {
   const initMap = new MapsComponent;
  }
  pegaEnderecos(){
    const inputObservacoes = this.observacoes;
    console.log(inputObservacoes);
    this.router.navigateByUrl('/pagamentos');
  }
  
}
