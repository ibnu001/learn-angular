import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input()
  childTitle: string = ''

  @Input()
  todoList: { todo: string, desc: string, isDone: boolean, doneLabel: string}[] = []

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

  @Output()
  onChanged = new EventEmitter<number>()

  clickCount : number = 0

  countChange() {
    this.clickCount++
    this.onChanged.emit(this.clickCount)
  }

  @Output()
  myEvent = new EventEmitter<{}>()

  person = {
    name: 'ibnu',
    age: 'Immortal'
  }

  emitEvent() {
    // this.myEvent.emit('Event from Child by Fauzan')
    this.myEvent.emit(this.person)
  }



}
