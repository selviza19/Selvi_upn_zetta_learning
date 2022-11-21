import { Component, OnInit } from '@angular/core';
import { DataService } from './../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  data: any;
  id: any;
  fileForm: any
  non: any = true;
  constructor(private dataservice: DataService, private routeActive: ActivatedRoute, private route: Router) {

   }
   dataadd: FormGroup = new FormGroup({
    id: new FormControl(null),
    title: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
    this.dataservice.getData().subscribe((data: string | any[]) => {
      this.dataadd.controls['id'].setValue(data.length + 1)
    })
  }

  ngOnAdd() {
    this.dataservice.pushData(this.dataadd.value).subscribe((data: any) => console.log(data))
    this.route.navigate([''])
  }

}
