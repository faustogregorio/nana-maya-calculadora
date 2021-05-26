import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrecioAGramosRoutingModule } from './precio-a-gramos-routing.module';
import { PrecioAGramosComponent } from './precio-a-gramos.component';


@NgModule({
  declarations: [
    PrecioAGramosComponent
  ],
  imports: [
    CommonModule,
    PrecioAGramosRoutingModule
  ]
})
export class PrecioAGramosModule { }
