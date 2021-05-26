import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PesoMasaRoutingModule } from './peso-masa-routing.module';
import { PesoMasaComponent } from './peso-masa.component';


@NgModule({
  declarations: [
    PesoMasaComponent
  ],
  imports: [
    CommonModule,
    PesoMasaRoutingModule
  ]
})
export class PesoMasaModule { }
