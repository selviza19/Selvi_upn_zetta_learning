import { Component, OnInit } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { KasirService, Selecteditem } from '../cashier.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public items : Observable<Selecteditem[]>
  public total : Observable<number>
  constructor(private kasirService : KasirService) {
    console.log("hahaha");
    this.items = this.kasirService.selectedItems$
    this.total = this.kasirService.selectedItems$.pipe(
     map((items) => items.reduce((total, item) => total += item.amount * item.Harga , 0))
   )
   }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    
    this.total = this.kasirService.selectedItems$.pipe(
      map((items) => items.reduce((total, item) => total += item.amount * item.Harga , 0))
    )
    
    
  }

removeitem(item :Selecteditem){
  this.kasirService.removeItem(item)
}

}
