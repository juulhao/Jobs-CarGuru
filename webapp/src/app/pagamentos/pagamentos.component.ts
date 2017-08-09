import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MdTabsModule } from '@angular/material';
import { PlanosComponent } from './../planos/planos.component';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';



declare const Mercadopago: any;
Mercadopago.setPublishableKey("TEST-5209d9ba-5f58-4b28-bd0f-7b5148f434ad");
Mercadopago.getIdentificationTypes();

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {
  
  tab: number = 2;
  isParaActive:boolean = false;
  isBtnActive:boolean = false;
  form : FormGroup;
  doSubmit = false;

  @Input() ccNumber;
  @Input() PayButton;

  constructor(private router : Router) {
  }

  ngOnInit() {
    let CampoCC = document.getElementById('cardNumber');
    /* this.addEvent(this.ccNumber, 'keyup',this.guessingPaymentMethod);
    this.addEvent(this.ccNumber, 'change', this.guessingPaymentMethod); */
  }

  addEvent(el, eventName, handler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, handler);
    } else {
        el.attachEvent('on' + eventName, function(){
            handler.call(el);
        });
    }
  };

  getBin() {
    return this.ccNumber.value.replace(/[ .-]/g, '').slice(0, 6);
  };

  guessingPaymentMethod(event) {
    var bin = this.getBin();
    if (event.type == "keyup") {
        if (bin.length >= 6) {
            Mercadopago.getPaymentMethod({
                "bin": bin
            }, this.setPaymentMethodInfo);
        }
    } else {
        setTimeout(function() {
            if (bin.length >= 6) {
                Mercadopago.getPaymentMethod({
                    "bin": bin
                }, this.setPaymentMethodInfo);
            }
        }, 100);
    }
  };

  setPaymentMethodInfo(status, response) {
    if (status == 200) {
        // do somethings ex: show logo of the payment method
        var form = document.querySelector('#pay');
        if (document.querySelector("input[name=paymentMethodId]") == null) {
            var paymentMethod = document.createElement('input');
            paymentMethod.setAttribute('name', "paymentMethodId");
            paymentMethod.setAttribute('type', "hidden");
            paymentMethod.setAttribute('value', response[0].id);
            form.appendChild(paymentMethod);
        } else {
          console.log('0');
        }
    }
  };

    doPay(){
        if(!this.doSubmit){
            var $form = document.querySelector('#pay');
            Mercadopago.createToken($form, this.sdkResponseHandler); // The function "sdkResponseHandler" is defined below
            return false;
        }
       
    };

    sdkResponseHandler(status, response) {
        if (status != 200 && status != 201) {
            console.log(response)
            alert("Por favor, verifique os campos.");
        }else{
            alert('Seu pagamento foi efetuado com suceso!');
           
        }
    }

    ativo(){
        this.isParaActive = !this.isParaActive;
        this.isBtnActive = !this.isBtnActive;
    }
  
}
