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
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})

@Injectable()
export class MapsComponent implements OnInit {
  SaidaEndereco;
  isRequired = false;
  
  constructor() { }

  ngOnInit() {
    this.initAutocomplete();

    
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
  getValue(){
    document.getElementById('autocomplete')
    console.log(this.SaidaEndereco); //undefined
  }

}
