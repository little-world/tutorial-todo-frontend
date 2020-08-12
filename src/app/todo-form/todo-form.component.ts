import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';
import {TodoListComponent} from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo = new Todo()

  @Input()
  todoList: TodoListComponent

  constructor(public todoService: TodoService) { }
  ngOnInit(): void {}

  add() {
    this.todoService.save(this.todo).subscribe(
      () => this.todoList.getTodos()
    )
  }
}



