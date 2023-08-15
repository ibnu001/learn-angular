import {Component} from '@angular/core';
import {TodoService} from "../todo.service";
import {ToDo} from "../model/todo";

@Component({
  selector: 'app-todo-list2',
  templateUrl: './todo-list2.component.html',
  styleUrls: ['./todo-list2.component.css']
})
export class TodoList2Component {

  private service = new TodoService()

  todos: ToDo[] = []

  ngOnInit() {
    this.getAllTodo()
  }

  getAllTodo() {
    this.todos = this.service.getTodos()
  }

  create() {

  }

  getDetail(){ // by id

  }

  update() {

  }

  delete(index : number) {
    this.service.delete(index)
  }

}
