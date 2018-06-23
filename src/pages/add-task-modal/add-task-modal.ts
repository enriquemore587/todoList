import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TodoModel } from '../../models/todoModel';
/**
 * Generated class for the AddTaskModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task-modal',
  templateUrl: 'add-task-modal.html',
})
export class AddTaskModalPage {

  public model = new TodoModel('');
  public title : string = "Add new Task";
  public buttonText : string = "ADD";
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewController: ViewController
  ) {
    if (this.navParams.get('todo')) {
      this.model = TodoModel.clone(this.navParams.get('todo'));
      this.title = 'Edit Task';
      this.buttonText = 'Save changes';
    }
    
  }

  public dismiss() {
    this.viewController.dismiss();
  }

  public submit(){
    this.viewController.dismiss(this.model);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskModalPage');
  }

}
