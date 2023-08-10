import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'title from parent'

  todo: string = ''
  description: string = ''
  todoList: { todo: string, desc: string, isDone: boolean, doneLabel: string}[] = []

  onTodo(evTodo: any): void {
    this.todo = evTodo.target.value
  }

  onDescription(evDes: any): void {
    this.description = evDes.target.value
  }

  tambah() {
    if (this.todo && this.description) {
      const todo = {
        todo: this.todo,
        desc: this.description,
        isDone: false,
        doneLabel: 'Done'
      }

      this.todoList.push(todo)
      this.description = ''
    }

    console.log(this.todoList)
  }

}
