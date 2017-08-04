
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ObservacoesComponent } from './pagamentos/observacoes/observacoes.component';
import { PlanosComponent } from './planos/planos.component';
import { FrequenciasComponent } from './frequencias/frequencias.component';
import { GaragemComponent } from './garagem/garagem.component';
import { CadastroCarroComponent } from './garagem/cadastro-carro/cadastro-carro.component';
import { NovoVeiculoComponent } from './garagem/novo-veiculo/novo-veiculo.component';
import { CheckUpComponent } from './garagem/check-up/check-up.component';
import { StatusPedidosComponent } from './garagem/status-pedidos/status-pedidos.component';
import { PagamentosComponent } from './pagamentos/pagamentos.component';
import { LocalVeiculoComponent } from './local-veiculo/local-veiculo.component';
import { MeusCarrosComponent } from './garagem/meus-carros/meus-carros.component';

const APP_ROUTES: Routes = [
    { path: '', component: PlanosComponent },
    { path: 'frequencias', component: FrequenciasComponent },
    { path: 'local-veiculo', component: LocalVeiculoComponent },
    { path: 'garagem', component: GaragemComponent },
    { path: 'home-newuser', component: CadastroCarroComponent },
    { path: 'novo-veiculo', component: NovoVeiculoComponent },
    { path: 'checkup', component: CheckUpComponent },
    { path: 'pagamentos', component: PagamentosComponent },
    { path: 'resumo', component: ObservacoesComponent},
    { path: 'status-pedido', component: StatusPedidosComponent },
    { path: 'meus-carros', component: MeusCarrosComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES,{ useHash: false });
