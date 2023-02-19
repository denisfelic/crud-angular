import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './crud/create/create.component';
import { ListComponent } from './crud/list/list.component';
import { ShowComponent } from './crud/show/show.component';

const routes: Routes = [
  { path: "", component: ListComponent },
  { path: "create", component: CreateComponent },
  { path: "todo/:todoId", component: ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
