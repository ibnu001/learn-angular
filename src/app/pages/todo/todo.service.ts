import {Injectable} from '@angular/core';
import {ToDo} from "./model/todo";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponsePageWrapper} from "../../shared/model/page-rsponse-wrapper";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private readonly http: HttpClient) {
  }

  create(todo: ToDo): Observable<ToDo> {
    // let token = sessionStorage.getItem('token')
    // const headers = new HttpHeaders({
    //   'Content-Type' : 'application/json',
    //   'Authorization' : `Bearer ${token}`
    // })
    return this.http.post<ToDo>('/api/todos', todo, )
  }

  getDetail(id: string): Observable<ToDo> {
    // let token = sessionStorage.getItem('token')
    // const headers = new HttpHeaders({
    //   'Content-Type' : 'application/json',
    //   'Authorization' : `Bearer ${token}`
    // })
    return this.http.get<ToDo>(`/api/todos/${id}`, )
  }

  update(updateTodo: ToDo): Observable<ToDo> {
    // let token = sessionStorage.getItem('token')
    // const headers = new HttpHeaders({
    //   'Content-Type' : 'application/json',
    //   'Authorization' : `Bearer ${token}`
    // })
    return this.http.put<ToDo>(`/api/todos`, updateTodo, )
  }

  delete(id: string) {
    // let token = sessionStorage.getItem('token')
    // const headers = new HttpHeaders({
    //   'Content-Type' : 'application/json',
    //   'Authorization' : `Bearer ${token}`
    // })
    return this.http.delete<any>(`/api/todos/${id}`, )
  }

  getTodosPerPage(currentPage: number) : Observable<ResponsePageWrapper<ToDo>> {
    // let token = sessionStorage.getItem('token')
    // const headers = new HttpHeaders({
    //   'Content-Type' : 'application/json',
    //   'Authorization' : `Bearer ${token}`
    // })
    const params = new HttpParams().set('page', currentPage.toString())
    return this.http.get<ResponsePageWrapper<ToDo>>('/api/todos', {params})
    // return this.http.get<ResponsePageWrapper<ToDo>>('/api/todos', {params, headers})
  }
}

