import {Input, OnInit} from '@angular/core';
import {Todo} from '../todo';

export class TodoFormComponent implements OnInit {
  todo = new Todo();
  @Input() todoList: Todo[];

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    this.todoList.push(this.todo);
    this.todo = new Todo();
  }
}


export class TodoFormComponent implements OnInit {
  todo = new Todo();
  @Input()
  todoList: Todo[];

  constructor() {
  }

  ngOnInit(): void {
  }

  add() {
    this.todoList.push(this.todo);
    this.todo = new Todo();
  }
}

export class TodoFormComponent implements OnInit {
  todo = new Todo()
  @Input()   todoList: Todo[]
  add() {     this.todoList.push(this.todo)     this.todo = new Todo()
  }
}
