import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { ListDataComponent } from './list-data/list-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';

const routes: Routes = [
  { path: 'edit/:id', component: EditDataComponent },
  { path: '', component: ListDataComponent },
  { path: 'add', component: AddDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
