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
// import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { NotFoundComponent } from './shared/component/not-found/not-found.component';
// import { ChildAComponent } from './component-a/child-a/child-a.component';
// import { ChildBComponent } from './component-a/child-b/child-b.component';

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
    // ComponentAComponent,
    ComponentBComponent,
    NotFoundComponent,
    // ChildAComponent,
    // ChildBComponent,
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
