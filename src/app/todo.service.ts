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


export class TodoListComponent implements OnInit { todos: Todo[] = []
  ngOnInit(): void { this.getAll() } constructor(public todoService: TodoService) {}
  getAll() { this.todoService.getAll().subscribe(
    data => this.todos = data )}
  delete(id: number) { this.todoService.delete(id).subscribe(
    () => this.getAll() )}
}
