import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ViewChild, ElementRef,  } from '@angular/core';
import { SelectedItem } from '../cashier/cashier.component';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  styles : ['[bgAqua]{  Background-color: pink;}',],
})


export class PaymentComponent implements OnInit {
  @ViewChild('bgAqua') bgAqua?:ElementRef;

  @Input() items: SelectedItem[]=[]
  @Output() itemsChange : EventEmitter<SelectedItem[]> = new EventEmitter <SelectedItem[]>()


  public total :number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.bgAqua?.nativeElement.setAttribute('bgAqua', '');
  }

   ngOnChanges(changes: SimpleChanges): void {
    this.total = this.items.reduce((total, item) => total += item.amount * item.price , 0)
  }

  removeItem(itemToBeRemoved: SelectedItem){
    console.log("tess");
    const itemIndex = this.items.findIndex(({id}) => id ===itemToBeRemoved.id)
    const itemRef = this.items[itemIndex]
    if(itemRef?.amount){
      this.items = this.items.map((item) => {
        return item.id === itemToBeRemoved.id ? { ...item, amount:item.amount -1} : item
      })
    }
    if(itemRef?.amount === 1){
      this.items = [...this.items.slice(0, itemIndex), ...this.items.slice(itemIndex + 1)]
    }
    this.itemsChange.emit(this.items)
  }

}
