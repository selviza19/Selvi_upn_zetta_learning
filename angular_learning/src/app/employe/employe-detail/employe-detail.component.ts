import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { employeService } from '../employe.service';
interface Employee {id : string  , name : string , position : string , availability : string ,action : string }

@Component({
  selector: 'app-employe-detail',
  templateUrl: './employe-detail.component.html',
  styleUrls: ['./employe-detail.component.css']
})
export class EmployeDetailComponent implements OnInit {
  private emplyoeeid : string|null =null
  public employee : Employee|null = null

  constructor(private route:ActivatedRoute , private employservice: employeService) {
    this.emplyoeeid = this.route.snapshot.paramMap.get('id')
    console.log(this.emplyoeeid);
   }

  ngOnInit(): void {
    if(typeof this.emplyoeeid === 'string'){
      this.employee = this.employservice.getEmployById(this.emplyoeeid)
    }
    console.log(this.employee);
  }

}
