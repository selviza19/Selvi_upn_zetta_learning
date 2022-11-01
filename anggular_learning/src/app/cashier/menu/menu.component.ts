import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cafe } from '../cashier/cashier.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input('cafeShop') cafeShop: Cafe[] = []
  @Output('cafeAdded)') onAddCafe: EventEmitter<Cafe> = new EventEmitter<Cafe>();

  constructor() { }

  ngOnInit(): void {
  }

  addCafe(cafe: Cafe):void {
    this.onAddCafe.emit(cafe)
  }


}
