export interface employ {id : string , name : string , position : string , availability : string ,action : string}
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable, of } from "rxjs"
export interface Employee {id :string}

@Injectable({
    providedIn :'root'
})


  export class employeService{
    private Employ : BehaviorSubject<employ[]> =  new BehaviorSubject<employ[]>([
        {id : '1' , name : 'Hartanta Sembiring', position :'Manager', availability :  'Hadir' ,action : 'view detail'},
        {id : '2' , name : 'Fajar Andhika', position :'Barista', availability :  'Hadir' ,action : 'view detail'},
        {id : '3' , name : 'Jeremy Sitorus', position :'OB', availability :  'Bolos' ,action : 'view detail'},
        {id : '4' , name : 'Raja Panjaitan', position :'Project Manager', availability :  'Nonton' ,action : 'view detail'}
      ]);

      constructor(){

      }
      
      public employ$ = this.Employ.asObservable();

      getEmployById(id:string) : any{
        const employeearray = this.Employ.getValue();
        console.log(employeearray)
        const employ = employeearray.find(employ => employ.id ===id)
        return employ || null;
        
      
      }

    
    
  }