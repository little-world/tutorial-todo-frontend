import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get<Todo[]>('http://localhost:8080/todo')
  }

  save(todo: Todo) {
    return this.http.post('http://localhost:8080/todo', todo)
  }

  delete(id: number) {
    return this.http.delete('http://localhost:8080/todo/' + id)
  }
}

