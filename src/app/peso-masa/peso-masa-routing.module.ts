import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesoMasaComponent } from './peso-masa.component';

const routes: Routes = [{ path: '', component: PesoMasaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PesoMasaRoutingModule { }
