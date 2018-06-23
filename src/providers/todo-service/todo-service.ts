import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TodoModel } from '../../models/todoModel';
/*
  Generated class for the TodoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoServiceProvider {

  private todos: TodoModel[];

  getTodos() {
    this.todos = [
      new TodoModel("esto es una tarea"),
      new TodoModel("esto es otra tarea", true),
      new TodoModel("esto es tercer tarea"),
      new TodoModel("esto es 4a tarea", false, true),
      new TodoModel("esto es 5a tarea", true, true),
      new TodoModel("esto es 6a tarea", false, true)
    ];
  }
  constructor(public http: HttpClient) {
    this.getTodos();
    console.log('Hello TodoServiceProvider Provider');
  }

  public toggleToDo(todo: TodoModel) {
    todo.isDone = !todo.isDone;
  }

  public removeTodo(todo: TodoModel) {
    let index: number = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, index),
      ...this.todos.slice(index + 1)
    ]
  }

  public addTodo(todo: TodoModel) {
    this.todos.push(todo);
  }

  public updateTodo(todo, modifiedTodo: TodoModel) {
    let index: number = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, index),
      modifiedTodo,
      ...this.todos.slice(index + 1)
    ]
  }

}
