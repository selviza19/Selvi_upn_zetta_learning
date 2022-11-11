import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { CashierComponent } from './cashier/cashier.component';
import { MenuComponent } from './menu/menu.component';
import { PaymentComponent } from './payment/payment.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    CashierComponent,
    MenuComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    CashierRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class CashierModule { }
