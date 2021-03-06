import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdIconModule, MdIconRegistry, MdTabsModule } from '@angular/material';
import { routing } from './app.routing';
import { Router, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SwiperModule } from '../../node_modules/angular2-useful-swiper'; //or for angular-cli the path will be ../../node_modules/angular2-useful-swiper
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Ng2CompleterModule } from "ng2-completer";
import { FormsModule,FormControl, ReactiveFormsModule, FormGroup } from "@angular/forms";
import { AgmCoreModule } from '@agm/core';



import { PerfilUser } from './Core/perfil-plano';

import $ from 'jquery';
import 'hammerjs';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlanosComponent } from './planos/planos.component';
import { FrequenciasComponent } from './frequencias/frequencias.component';
import { LavagemBasicaComponent } from './planos/lavagem-basica/lavagem-basica.component';
import { LavagemGuruComponent } from './planos/lavagem-guru/lavagem-guru.component';
import { LavagemPremiumComponent } from './planos/lavagem-premium/lavagem-premium.component';
import { LocalVeiculoComponent } from './local-veiculo/local-veiculo.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { GaragemComponent } from './garagem/garagem.component';
import { CadastroCarroComponent } from './garagem/cadastro-carro/cadastro-carro.component';
import { MeusCarrosComponent } from './garagem/meus-carros/meus-carros.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MeusCheckupsComponent } from './meus-checkups/meus-checkups.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { CheckUpComponent } from './garagem/check-up/check-up.component';
import { ProximaDataComponent } from './local-veiculo/proxima-data/proxima-data.component';
import { NovoVeiculoComponent } from './garagem/novo-veiculo/novo-veiculo.component';
import { StatusPedidosComponent } from './garagem/status-pedidos/status-pedidos.component';
import { RatingPedidoComponent } from './garagem/status-pedidos/rating-pedido/rating-pedido.component';
import { MapsComponent } from './shared/maps/maps.component';
import { ObservacoesComponent } from './pagamentos/observacoes/observacoes.component';
import { CupomComponent } from './shared/cupom/cupom.component';

import { MercadoPagoService } from './shared/mercado-pago.service';
import { FrequenciasService } from './frequencias/frequencias.service';
import { PlanosService } from './planos/planos.service';
import { AuthService } from './Core/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlanosComponent,
    FrequenciasComponent,
    LavagemBasicaComponent,
    LavagemGuruComponent,
    LavagemPremiumComponent,
    LocalVeiculoComponent,
    PagamentosComponent,
    GaragemComponent,
    CadastroCarroComponent,
    MeusCarrosComponent,
    AgendaComponent,
    MeusCheckupsComponent,
    NavMenuComponent,
    CheckUpComponent,
    ProximaDataComponent,
    NovoVeiculoComponent,
    StatusPedidosComponent,
    RatingPedidoComponent,
    MapsComponent,
    ObservacoesComponent,
    CupomComponent, 
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    routing,
    HttpModule,
    BrowserAnimationsModule,
    SwiperModule,
  
    routing,
    Ng2CompleterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: 
  [ PlanosService, MercadoPagoService, PerfilUser, FrequenciasService, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
