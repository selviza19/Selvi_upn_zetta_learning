import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashierComponent } from './cashier/cashier/cashier.component';
import { MenuComponent } from './cashier/menu/menu.component';
import { PaymentComponent } from './cashier/payment/payment.component';

@NgModule({
  declarations: [
    CashierComponent,
    MenuComponent,
    PaymentComponent
  ],
  imports: [
  CommonModule
  ]
})
export class AppModule { }
