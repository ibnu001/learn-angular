import {Injectable} from '@angular/core';
import {ToDo} from "./model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() {
  }

  private todos: ToDo[] = []

  getTodos(): ToDo[] {
    return this.todos
  }

  create(todo: ToDo) {
    todo.id = String(this.todos.length + 1)
    this.todos.push(todo);
  }

  getDetail(id: string): ToDo {
    return <ToDo>this.todos.find((todo) => todo.id === id)
  }

  update(updateTodo: ToDo) {
    let todo = this.getDetail(updateTodo.id);
    todo.name = updateTodo.name
    todo.description = updateTodo.description
  }

  delete(index: number) {
    this.todos.splice(index, 1)
  }
}
