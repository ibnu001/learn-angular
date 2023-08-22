import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagesRoutingModule} from './pages-routing.module';
import {TodoService} from "./todo/todo.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TodoListComponent} from "./todo/todo-list/todo-list.component";
import {TodoFormComponent} from './todo/todo-form/todo-form.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    TodoListComponent,
    TodoFormComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TodoService],

})
export class PagesModule {
}
