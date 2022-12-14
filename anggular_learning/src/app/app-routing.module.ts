import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashierComponent } from './cashier/cashier/cashier.component';

const routes: Routes = [
  {
    path: 'cashier',
    pathMatch: 'full',
    loadChildren: () => import('./cashier/cashier.module').then(m => m.CashierModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
