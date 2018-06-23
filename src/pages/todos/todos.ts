import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { TodoModel } from '../../models/todoModel';
import { AddTaskModalPage } from '../add-task-modal/add-task-modal';

import { TodoServiceProvider } from '../../providers/todo-service/todo-service';
/**
 * Generated class for the TodosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public todoService: TodoServiceProvider
  ) { }

  ionViewDidLoad() { }

  public setTodoStyle(todo: TodoModel) {

    let style = {
      'text-decoration': todo.isDone ? 'line-through' : 'none',
      'font-weight': todo.isImportant ? '600' : 'normal'
    };
    return style;
  }

  public toggleToDo(todo: TodoModel) {
    this.todoService.toggleToDo(todo);
  }

  public removeTodo(item: TodoModel) {
    this.todoService.removeTodo(item);
  }

  public addTask() {
    const modal = this.modalCtrl.create(AddTaskModalPage);
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        this.todoService.addTodo(data);
      }
    });
  }

  public showEditTodo(todo: TodoModel){
    let modal = this.modalCtrl.create(AddTaskModalPage, {todo});
    modal.present();

    modal.onDidDismiss(data =>{
      if(data){
        this.todoService.updateTodo(todo, data);
      }
    });
  }

}
