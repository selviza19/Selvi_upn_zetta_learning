import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { employ, employeService } from '../employe.service';

export interface employs {id : number , name : string , position : string , availability : string ,action : string }
@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class employeComponent implements OnInit {
  public employs : Observable<employ[]> | undefined
  constructor(private employservice: employeService) { 
  this.employs = this.employservice.employ$
  console.log(this.employs)
}

  ngOnInit(): void {
  }
  displayedColumns: string[] = [ 'id','name', 'position', 'availability' ,'action'];
}
