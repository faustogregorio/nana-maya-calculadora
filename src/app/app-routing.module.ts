import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'precio-a-gramos', loadChildren: () => import('./precio-a-gramos/precio-a-gramos.module').then(m => m.PrecioAGramosModule) }, { path: 'peso-masa', loadChildren: () => import('./peso-masa/peso-masa.module').then(m => m.PesoMasaModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
