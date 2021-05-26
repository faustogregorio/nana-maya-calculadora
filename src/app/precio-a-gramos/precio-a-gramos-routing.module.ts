import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrecioAGramosComponent } from './precio-a-gramos.component';

const routes: Routes = [{ path: '', component: PrecioAGramosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrecioAGramosRoutingModule { }
