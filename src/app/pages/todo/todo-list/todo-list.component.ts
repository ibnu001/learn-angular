import {Component} from '@angular/core';
import {TodoService} from "../todo.service";
import {ToDo} from "../model/todo";
import Swal from 'sweetalert2'
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-form',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  constructor(
    private readonly service: TodoService,
    private readonly router: Router
  ) {
  }

  todos: ToDo[] = []

  ngOnInit() {
    this.getAllTodo()
  }

  getAllTodo() {
    this.service.getTodos().subscribe(
      (res) => {
        this.todos = res;
      })
  }

  update(id: string) {
    this.router.navigateByUrl(`/form?id=${id}`)
  }

  delete(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(id).subscribe(() => {
          this.getAllTodo()
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

}
