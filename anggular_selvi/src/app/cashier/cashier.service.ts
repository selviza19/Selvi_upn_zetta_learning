export interface item {id : string , name : string , price : number}
export interface Selecteditem {id : string , name : string , price : number, amount : number}
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs"

@Injectable({
    providedIn :'root'
})
export class KasirService{
    private items : BehaviorSubject<item[]> = new BehaviorSubject<item[]> ([
    {id:'1', name: 'Es Teh', price: 5000},
    {id:'2', name: 'Juice Straberry', price: 10000},
    {id:'3', name: 'Milshake Straberry', price: 22000},
    {id:'4', name: 'Coffee Torabika', price: 25000},
    {id:'5', name: 'Ice Relvet', price: 16000},
    {id:'6', name: 'Es Soda Gembira', price: 15000},
    {id:'7', name: 'Coffe Jos', price: 6000},
    {id:'8', name: 'Shisha Reguler', price: 54000},
      ])
    
      private selectedItems : BehaviorSubject<Selecteditem[]> = new BehaviorSubject<Selecteditem[]>([]);

      public items$ = this.items.asObservable();
      public selectedItems$ = this.selectedItems.asObservable();


      addItem(item :item){
        const duplicated =this.selectedItems.value.findIndex(({id})   =>id=== item.id)
    
        if(duplicated>=0){
          this.selectedItems.value[duplicated].amount +=1
        }
        else{
          this.selectedItems.value.push({
              ...item, amount: 1,
              price: 0
          })
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