import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AnimeFormComponent} from './anime/anime-form/anime-form.component';
import {AnimeListComponent} from './anime/anime-list/anime-list.component';
import { ForbiddenNameDirective } from './shared/utils/forbidden-name/forbidden-name.directive';
import { ExponentPipe } from './shared/pipes/exponent.pipe';
import { AgePipe } from './shared/pipes/age.pipe';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import {TodoService} from "./todo/todo.service";
import {TodoList2Component} from "./todo/todo-list2/todo-list2.component";

@NgModule({
  declarations: [
    AppComponent,
    AnimeFormComponent,
    AnimeListComponent,
    ForbiddenNameDirective,
    ExponentPipe,
    AgePipe,
    TodoListComponent,
    TodoList2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
