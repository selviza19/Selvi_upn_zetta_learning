export interface item {id : number , name : string , Harga : number}
export interface Selecteditem {id : number , name : string , Harga : number, amount : number}
export interface employ {id : number , name : string , position : string , availability : string ,action : string}
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"

@Injectable({
    providedIn :'root'
})
export class KasirService{
    private items : BehaviorSubject<item[]> = new BehaviorSubject<item[]> ([
        {id : 1 , name : 'Kopi Susu', Harga: 5000},
        {id : 2 , name : 'Es Teh', Harga: 3000},
        {id : 3 , name : 'Es Jeruk', Harga: 4000},
        {id : 4 , name : 'Teh Tarik', Harga: 5000},
        {id : 5 , name : 'Aqua', Harga:4000},
        {id : 6 , name : 'Jus Mangga', Harga: 10000},
        {id : 7 , name : 'Susu Cokelat', Harga: 6000},
        {id : 8 , name : 'Capucinno', Harga: 7000},
        {id : 9 , name : 'Drink Bengbeng', Harga: 6000},
        {id : 10 , name : 'Extra Joss Susu(Josua)', Harga: 6000}
      ])
    
      private selectedItems : BehaviorSubject<Selecteditem[]> = new BehaviorSubject<Selecteditem[]>([
    ]);

     

      public items$ = this.items.asObservable();
      public selectedItems$ = this.selectedItems.asObservable();
 


      addItem(item :item){
        const duplicated =this.selectedItems.value.findIndex(({id})   =>id=== item.id)
    
        if(duplicated>=0){
          this.selectedItems.value[duplicated].amount +=1
        }
        else{
          this.selectedItems.value.push({...item, amount: 1})
        }
    
      }

      removeItem(itemToBeRemoved:Selecteditem){
        const itemIndex = this.selectedItems.value.findIndex(({id}) => id ===itemToBeRemoved.id)
      
        if(this.selectedItems.value[itemIndex].amount>1){
          this.selectedItems.value[itemIndex].amount-=1
        }
        else{
          this.selectedItems.value.splice(itemIndex,1);
        }
     
      }
}