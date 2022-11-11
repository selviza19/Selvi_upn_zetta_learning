import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeRoutingModule } from './employe-routing.module';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { employeComponent } from './employe/employe.component';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    EmployeDetailComponent,
    employeComponent
  ],
  imports: [
    CommonModule,
    EmployeRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class EmployeModule { }
