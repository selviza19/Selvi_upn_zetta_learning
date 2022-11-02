import { Component, OnInit } from '@angular/core';
import { SelectedItem } from '../cashier/cashier.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  @Input() items!: SelectedItem[];
  @Output() itemChanges : EventEmitter<SelectedItem[]> = new EventEmitter <SelectedItem[]>;

  public total :number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    console.log("tes")
    this.total = this.items.reduce((total, item) => total += item.amount * item.price , 0)
  }

}
