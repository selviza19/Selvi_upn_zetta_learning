import { Component, OnInit } from '@angular/core';
import { Item } from '../cashier/cashier.component';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input('items') items: Item[]=[]
  @Output('itemAdded') onAddItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item: Item): void {
  this.onAddItem.emit(item)
  }

}
