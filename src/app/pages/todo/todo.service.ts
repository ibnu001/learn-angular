import {Injectable} from '@angular/core';
import {ToDo} from "./model/todo";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private readonly http: HttpClient) {
  }

  getTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>('/api/todos')
  }

  create(todo: ToDo): Observable<ToDo> {
    return this.http.post<ToDo>('/api/todos', todo)
  }

  getDetail(id: string): Observable<ToDo> {
    return this.http.get<ToDo>(`/api/todos/${id}`)
  }

  update(updateTodo: ToDo): Observable<ToDo> {
    return this.http.put<ToDo>(`/api/todos`, updateTodo)
  }

  delete(id: string) {
    return this.http.delete<any>(`/api/todos/${id}`)
  }

  getTodosPerPage(currentPage: number) : Observable<any> {
    const params = new HttpParams().set('page', currentPage.toString())
    return this.http.get('/api/todos/perpage', {params})
  }
}

