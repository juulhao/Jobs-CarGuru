import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { PlanosService } from './planos.service';
import { PlanosComponent } from './planos.component';
import 'rxjs/add/operator/map';


@NgModule({
  imports: [
    CommonModule,
    PlanosComponent,
    PlanosService,
    HttpModule
  ],
  declarations: [PlanosComponent],
  providers: []
})
export class PlanosModule { 
   
}
