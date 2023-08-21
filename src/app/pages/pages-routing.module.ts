import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoFormComponent} from "./todo/todo-form/todo-form.component";
import {TodoListComponent} from "./todo/todo-list/todo-list.component";
import {NotFoundComponent} from "../shared/component/not-found/not-found.component";

const routes: Routes = [
  {
    path: 'form',
    component: TodoFormComponent
  },
  {
    path: 'list',
    component: TodoListComponent
  },
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
