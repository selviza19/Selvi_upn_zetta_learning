import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'kasir',
    pathMatch:'full',
    loadChildren:()=>import('./cashier/cashier.module').then(mod=>mod.cashierModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
