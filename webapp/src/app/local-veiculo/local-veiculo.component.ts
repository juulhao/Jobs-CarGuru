import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MapsComponent } from './../shared/maps/maps.component';
import { Component, OnInit, Injectable, Input, Output, EventEmitter } from '@angular/core';

declare const google: any;
var autocomplete, map;
declare let componentForm : {
  street_number: 'short_name',
  route: 'long_name',
  locality: 'long_name',
  administrative_area_level_1: 'short_name',
  country: 'long_name',
  postal_code: 'short_name'
};
const myKey = "AIzaSyC_UpDr16muhKiogGMImp8vyuupwf31_Bw";

@Component({
  selector: 'app-local-veiculo',
  templateUrl: './local-veiculo.component.html',
  styleUrls: ['./local-veiculo.component.css']
})

export class LocalVeiculoComponent implements OnInit {
  observacoes : Object;
  formGroup: FormControl;
  SaidaEndereco;  
  color = 'warn';
  constructor(public router : Router) { 
  }

  ngOnInit() {
   const initMap = new MapsComponent;
   this.initAutocomplete();
  }
  
  pegaEnderecos(): void{
    if (this.formGroup.valid) { // <-----
      console.log(this.formGroup.value);
      alert('onSubmit called; formGroup.valid = ' + this.formGroup.valid);
    }
    console.log(this.observacoes);
    this.router.navigateByUrl('/pagamentos');
  }
  initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('autocomplete')),
        {types: ['geocode']});
    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', this.fillInAddress);
    console.log(autocomplete);
  }
  
  fillInAddress() {
    // Get the place details from the autocomplete object.
    const place = autocomplete.getPlace();
  }
  
  geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var circle = new google.maps.Circle({
          center: geolocation,
          radius: position.coords.accuracy
        });
        autocomplete.setBounds(circle.getBounds());
      });
    }
  }
  
  
}
