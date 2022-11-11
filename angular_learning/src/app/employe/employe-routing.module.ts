import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeDetailComponent } from './employe-detail/employe-detail.component';
import { employeComponent } from './employe/employe.component';


const routes: Routes = [
  {
    path: 'table' ,
    pathMatch:'full',
    component:employeComponent
  },
  {
    path: 'detail/:id' ,
    pathMatch:'full',
    component:EmployeDetailComponent
  },
  {
    path: '**' ,
    pathMatch:'full',
   redirectTo : 'table'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeRoutingModule { }
