import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CashierComponent } from './cashier/cashier/cashier.component';
import { MenuComponent } from './cashier/menu/menu.component';
import { PaymentComponent } from './cashier/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    CashierComponent,
    MenuComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
