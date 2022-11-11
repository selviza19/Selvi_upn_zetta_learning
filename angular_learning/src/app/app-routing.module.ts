import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path :'kasir',
    loadChildren:()=>import('./cashier/cashier.module').then(m=> m.CashierModule),
  },
  {
    path :'employee',
    loadChildren:()=>import('./employe/employe.module').then(m=> m.EmployeModule),
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
