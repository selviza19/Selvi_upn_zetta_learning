import { Component, OnInit } from '@angular/core';
export interface Item {id : string , name : string , price : number}
export interface SelectedItem {id : string , name : string , price : number, amount : number}

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {
  public items: Item[]= [
    {id:'1', name: 'Cafe Latte', price: 5000},
    {id:'2', name: 'Vanilla Latte', price: 5000},
    {id:'3', name: 'Caramel Macchiato', price: 5000},
    {id:'4', name: 'Americano', price: 5000},
    {id:'5', name: 'Affogato', price: 5000},
    {id:'6', name: 'Matcha Latte', price: 5000},
    {id:'7', name: 'Cappuccino', price: 5000},
    {id:'8', name: 'Mochaccino', price: 5000},
    {id:'9', name: 'Japanese Iced Coffee', price: 5000},
    {id:'10', name: 'Vietnam Drip', price: 5000},
  ]
  public selectedItems: SelectedItem[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: Item){
    const duplicatedItemIndex = this.selectedItems.findIndex(({ id }) => id === item.id)
    if(duplicatedItemIndex >= 0){
      this.selectedItems[duplicatedItemIndex].amount += 1
    }else{
      this.selectedItems.push({ ...item, amount: 1})
    }
  }


}
