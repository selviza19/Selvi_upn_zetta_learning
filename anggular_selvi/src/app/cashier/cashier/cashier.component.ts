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
    {id:'1', name: 'Es Teh', price: 5000},
    {id:'2', name: 'Juice Straberry', price: 10000},
    {id:'3', name: 'Milshake Straberry', price: 22000},
    {id:'4', name: 'Coffee Torabika', price: 25000},
    {id:'5', name: 'Ice Relvet', price: 16000},
    {id:'6', name: 'Es Soda Gembira', price: 15000},
    {id:'7', name: 'Coffe Jos', price: 6000},
    {id:'8', name: 'Shisha Reguler', price: 54000},
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
