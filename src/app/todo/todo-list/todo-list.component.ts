import {Component} from '@angular/core';
import {TodoService} from "../todo.service";
import {ToDo} from "../model/todo";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(private readonly service: TodoService) {
    // ini adalah proses ^^^^^^^^^^^^^^^ Injection nya, karena inject todo Service
  }

  todoForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    description: new FormControl(null)
  })

  todos: ToDo[] = []
  editMode: boolean = false;
  editTodo: ToDo | null = null;
  btnSubmit: string = 'Submit'

  ngOnInit() {
    this.getAllTodo()
  }

  getAllTodo() {
    this.todos = this.service.getTodos()
  }

  create(todo: ToDo) {
    this.service.create(todo)
  }

  update(id: string) {
    this.btnSubmit = 'Update'
    let todo = this.service.getDetail(id);

    this.editMode = true;
    this.editTodo = todo;

    this.todoForm.setValue({
      name: todo.name,
      description: todo.description
    });
  }

  delete(index: number) {
    this.service.delete(index)
  }

  submitData(data: any) {
    if (this.editMode && this.editTodo) {
      const updatedTodo: ToDo = {
        id: this.editTodo.id,
        name: data.name,
        description: data.description
      };
      this.service.update(updatedTodo);
      this.btnSubmit = 'Submit'
    } else {
      this.service.create(data);
    }

    this.todoForm.reset();
    this.editMode = false;
    this.editTodo = null;
  }

  form(property: string): FormGroup {
    return this.todoForm.get(property) as FormGroup
  }

}
