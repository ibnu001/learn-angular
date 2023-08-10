import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() childTitle: string = ''

  @Input() todoList: { todo: string, desc: string, isDone: boolean, doneLabel: string}[] = []

  isDone(i: number) {
    const todoItem = this.todoList[i]
    todoItem.isDone = !todoItem.isDone

    if (todoItem.isDone) {
      todoItem.doneLabel = 'Cancel'
    } else {
      todoItem.doneLabel = 'Done'
    }
  }

  delete(i: number) {
    this.todoList.splice(i, 1)
  }

}
