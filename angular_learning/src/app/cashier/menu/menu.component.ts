import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { item, KasirService } from '../cashier.service';
export interface items {id : number , name : string , Harga : number}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public items1 : Observable<item[]>
  constructor(private kasirService: KasirService) {
    this.items1 = this.kasirService.items$
   }

  ngOnInit(): void {
  }
  addItem(item :item) : void{
    this.kasirService.addItem(item);  
  }

}
