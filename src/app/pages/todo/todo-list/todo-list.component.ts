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
  todosPerPage: ToDo[] = []

  ngOnInit() {
    this.getAllTodo()
    this.getTodosPage(0)
  }


  getAllTodo() {
    this.service.getTodos().subscribe(
      (res) => {
        this.todos = res;
        this.totalPage = Math.ceil(res.length / this.size)
        console.log(this.totalPage)

      })
  }

  update(id: string) {
    this.swalLoading()
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

  currentPage = 0
  totalPage = 0
  size = 5

  getTodosPage(currentPage: number) {
    this.service.getTodosPerPage(currentPage).subscribe((res) => {
      this.swalLoading()
      this.todosPerPage = res.data
    })
  }

  nextPage() {
    this.currentPage += 1
    this.getTodosPage(this.currentPage)
  }

  prevPage() {
    this.currentPage -= 1
    this.getTodosPage(this.currentPage)
  }

  numberPage(numberPage: number) {
    this.currentPage = numberPage - 1
    this.getTodosPage(this.currentPage)
  }

  pagesArray(): number[] {
    return Array(this.totalPage).fill(0).map((x, i) => i + 1);
  }

  swalLoading() {
    Swal.fire({
      title: 'Please wait...',
      timer: 300,
      didOpen: () => {
        Swal.showLoading()
      }
    })
  }
}
