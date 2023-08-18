import {Component} from '@angular/core';
import {TodoService} from "../todo.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ToDo} from "../model/todo";
import Swal from 'sweetalert2'
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  constructor(
    private readonly service: TodoService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParam) => {
      this.id = queryParam['id']
    })

    if (this.id) {
      this.service.getDetail(this.id).subscribe((res) => {
        this.todoForm.setValue({
          id: res.id,
          todo: res.todo,
          description: res.description
        })
      })
      this.btnSubmit = 'Update'
      this.editMode = true;
    }
  }

  todoForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    todo: new FormControl(''),
    description: new FormControl('')
  })

  btnSubmit: string = 'Submit'
  id = ''
  editMode: boolean = false;

  addTodo(todo: ToDo) {
    this.service.create(todo).subscribe((res) => {
      this.router.navigateByUrl('/list')
    })

    this.clearForm()
  }

  form(property: string): FormGroup {
    return this.todoForm.get(property) as FormGroup
  }

  submitData(data: any) {
    if (this.editMode) {

      this.service.update(data).subscribe()
      this.router.navigateByUrl('/list')

      this.btnSubmit = 'Submit'

    } else {
      this.addTodo(data)
    }

    this.todoForm.reset();
    this.editMode = false
  }

  clearForm() {
    this.todoForm.reset()
  }
}
