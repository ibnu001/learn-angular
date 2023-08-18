import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoFormComponent} from "./todo/todo-form/todo-form.component";
import {TodoListComponent} from "./todo/todo-list/todo-list.component";

const routes: Routes = [
  {
    path: 'form',
    component: TodoFormComponent
  },
  {
    path: 'list',
    component: TodoListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
